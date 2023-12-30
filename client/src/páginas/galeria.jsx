import { useEffect, useState } from "react";
import GaleriaHeader from "../componentes/headers/galeria_header";
import Axios from 'axios';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Icone from "../componentes/ícones/display_icones";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Galeria({ scroll }) {

    const scrollY = scroll()
    const [data, setData] = useState(null)
    const [imagens, setImagens] = useState([])
    const [pageToken, setPageToken] = useState('')
    const [lastPageToken, setLastPageToken] = useState('')
    const [visibilityModal, setVisibilityModal] = useState('hidden')
    const [srcImagemModal, setSrcImagemModal] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {

        AOS.init()

        window.scrollTo(0, 0);

        if (pageToken === '') {
            carregarFotografias(pageToken)
        }
    }, [])

    function goToTop() {
        window.scrollTo(0, 0);
    }


    function carregarFotografias(token) {

        let url;

        if (token != '') {
            url = `${import.meta.env.VITE_SERVER}/fotografiasGaleria/${token}`
        } else {
            url = `${import.meta.env.VITE_SERVER}/fotografiasGaleria`
        }

        Axios.get(url)
            .then(response => {

                setData(response.data.files);
                
                response.data.files.map(img => {
                    setImagens(oldArray => [...oldArray, <figure key={img.id} className={`rounded w-[${img.imageMediaMetadata.width}px] h-[${img.imageMediaMetadata.height}px] m-2 sm:m-5 bg-cinzento2 animate-pulse`}><img onClick={e => mostrarImagem(e)} width={img.imageMediaMetadata.width + 'px'} height={img.imageMediaMetadata.height + 'px'} loading="lazy" onLoad={e => {
                        e.target.parentNode.classList.remove('animate-pulse');
                        e.target.style.visibility = 'visible';
                    }
                    } className='rounded invisible cursor-pointer' src={img.webContentLink} /></figure>])
                })

                if (response.data.nextPageToken) {
                    setPageToken(response.data.nextPageToken)
                }

            })
            .catch(error => {
                setError(true)
                console.error(error)
            });
    }


    useEffect(() => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const documentHeight = document.documentElement.scrollHeight

        const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

        if (parseInt(scrollPercentage) > 60) {
            if (pageToken !== lastPageToken) {
                setLastPageToken(pageToken)
                carregarFotografias(pageToken)
            }

        }
    }, [scrollY])


    function mostrarImagem(img) {
        setSrcImagemModal(img.target.attributes.src.value)
        setVisibilityModal('visible')

    }

    return (
        <div>
            <GaleriaHeader />
            {data && imagens.length >= 60 ? <div>




                <ResponsiveMasonry className="px-2 sm:container" columnsCountBreakPoints={{ 300: 1, 350: 2, 900: 3 }}>
                    <Masonry>

                        {imagens.map(img => img)}

                    </Masonry>

                </ResponsiveMasonry>


                <div style={{ visibility: visibilityModal }} onClick={() => visibilityModal === 'visible' ? (setVisibilityModal('hidden'), setSrcImagemModal('')) : null} id="modalImagem" className="h-screen z-50 bg-preto fixed bg-opacity-80 top-0 w-full flex justify-center items-center">
                    <div className="max-w-[95vw] md:max-w-[80vw] max-h-[80vh] flex">
                        {srcImagemModal ? <img className="object-contain" src={srcImagemModal} /> : null}
                    </div>

                    <Icone tipo='cruz' viewbox='0 0 100 100' className='w-5 h-5 fill-cinzento1 absolute top-8 right-8 xs:top-8 cursor-pointer xs:right-10 lg:top-10 lg:right-11' />

                </div>
            </div> : error ? <div className='text-center flex justify-center items-center text-cinzento3 max-w-[250px] sm:max-w-none mx-auto flex-col h-[50vh]'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-cinzento3' />Não conseguimos carregar as fotos da galeria.</div> : <div className='h-screen'></div>}



            {scrollY > 800 && data && imagens.length >= 60 ? <div className='w-full fixed bottom-10'>
                <p data-aos="fade-up" data-aos-delay='500' className="font-semibold bg-branco px-10 hover:bg-opacity-100 transition-colors duration-200 cursor-pointer py-3 rounded-full bg-opacity-70 mx-auto text-center w-fit" onClick={goToTop}>Voltar ao topo</p>
            </div> : ''}
            




        </div>

    )


}