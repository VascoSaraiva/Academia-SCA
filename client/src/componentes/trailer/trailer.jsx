import ImagemTrailer from "../../assets/imagens/trailer/imagem_trailer.webp"
import Icone from "../ícones/display_icones"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";




export default function Trailer(){

    useEffect(() => {
        AOS.init()
    }, [])

    const [trailerModal, setTrailerModal] = useState(false)


    return(
        <div className="container bg-contain flex justify-center flex-col items-center w-fit">
            <div className='text-center my-10'>
                <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-4">Trailer</h1>

                <p className="text-cinzento3 mb-5 sm:w-[25rem] lg:w-[28rem] mx-auto">Fica-nos a conhecer melhor através deste vídeo, onde poderás ver mais sobre o Sporting Clube de Aveiro.</p>
            </div>

            <figure onClick={() => setTrailerModal(true)} data-aos="fade-up" data-aos-delay='300' className="relative w-fit mx-auto hover:cursor-pointer">
                <img loading='lazy'  id="teste" className={`h-[350px] xs:h-[350px] md:h-[400px] sm:w-[640px] mx-auto rounded-xl object-cover`} src={ImagemTrailer} alt="Trailer de Apresentação" />
                <Icone onClick={() => setTrailerModal(true)} tipo='video_play' viewbox='0 0 100 100' className='h-20 w-20 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] transition duration-300 fill-verde hover:fill-verde_escuro' />
            </figure>
            
            
               {trailerModal ? <div onClick={() => setTrailerModal(false)} className="fixed top-0 h-screen bg-preto lg:bg-opacity-70 w-full z-50 flex justify-center items-center">
                    <div className="video-container">
                    <iframe className="bg-preto lg:rounded-md" src="https://www.youtube.com/embed/tzHL8ndSPoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                    </div>

                    <div onClick={() => setTrailerModal(false)}><Icone tipo='cruz' viewbox='0 0 100 100' className='w-5 h-5 fill-cinzento1 absolute top-8 right-8 xs:top-8 cursor-pointer xs:right-10 lg:top-10 lg:right-11' /></div>        
                    
                </div> : ''} 
            

        </div>
    )
}