import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Icone from '../ícones/display_icones';
import Botao1 from '../botões/botao1';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testemunhos() {

    const cards = []

    let [data, setData] = useState(null)
    let [testemunhosHeight, setTestemunhosHeight] = useState('h-[100vh] xs:h-[35rem]')
    let [testemunhosGradient, setTestemunhosGradient] = useState('')
    let [botaoTestemunhos, setBotaoTestemunhos] = useState('Mostrar mais...')

    function expandirTestemunhos() {
        if (testemunhosHeight != '') {
            setTestemunhosHeight('')
            setTestemunhosGradient('hidden')
            setBotaoTestemunhos('Mostrar menos')
        } else {
            setTestemunhosHeight('h-[100vh] xs:h-[35rem]')
            setTestemunhosGradient('')
            setBotaoTestemunhos('Mostrar mais...')
            document.getElementById('testemunhos').scrollIntoView();
        }

    }

    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_SERVER}/getTestemunhos`) 
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(error));
            AOS.init()
    }, [])

    if (data) {
        data.forEach(element => {

            cards.push(
                <div data-aos="fade-up" data-aos-delay="200"  key={element._id} className='bg-branco border border-cinzento2 rounded-xl xs:w-[26rem] md:w-auto xs:mx-auto my-3 lg:w-auto md:mx-3 lg:m-4 px-4 py-5'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center flex-col xs:flex-row mx-auto xs:mx-0 text-center xs:text-left'>
                            <div>
                                <h1 className='font-unbounded font-medium'>{element.nome}</h1>
                                <h2 className='text-[0.8rem] lg:text-[0.7rem] text-cinzento3'>Avaliação Google</h2>
                                <div className='bg-verde px-3 py-1 mt-3 rounded-full flex items-center justify-center xs:hidden w-fit mx-auto'>
                                    <h3 className=' text-center font-unbounded text-branco pr-1'>{element.estrelas.toFixed(1)}</h3>
                                    <Icone tipo='estrela_fill' viewbox='0 0 96 93' className="fill-branco h-3.5 w-3.5 inline" />
                                </div>

                            </div>
                        </div>

                        <div className='bg-verde px-3 py-1 rounded-full items-center hidden xs:flex'>
                            <h3 className=' text-center font-unbounded  text-branco pr-1'>{element.estrelas.toFixed(1)}</h3>
                            <Icone tipo='estrela_fill' viewbox='0 0 96 93' className="fill-branco h-3.5 w-3.5 inline" />
                        </div>

                    </div>

                    <div>
                        <p className='text-[0.9rem]'>{element.comentario}</p>
                    </div>
                </div>
            )


        });

        return (
            <div>
                <div className='text-center container'>
                    <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-4">Testemunhos</h1>

                    <p className="text-cinzento3 mb-14 sm:w-[25rem] lg:w-[28rem] mx-auto">Lê aqui os diferentes testemunhos prestados sobre a Academia de Vela SCA/AAUAv.</p>
                </div>


                <div  data-aos="fade-up" data-aos-delay="200"  id='testemunhos' className='relative'>
                    <ResponsiveMasonry className={`container max-w-[650px] lg:max-w-[1380px] ${testemunhosHeight}  mb-5 overflow-hidden`} columnsCountBreakPoints={{ 350: 1, 1023: 2, 1279: 3 }}>
                        <Masonry>
                            {cards}
                        </Masonry>
                    </ResponsiveMasonry>
                    <div className={`bg-gradient-to-t absolute inset-x-0 bottom-0 from-branco h-[35rem] ${testemunhosGradient}`}>
                    </div>
                </div>

                <div className='text-center'>
                    <Botao1 onClick={expandirTestemunhos} cor='preto'>{botaoTestemunhos}</Botao1>
                </div>
            </div>
        )
    }




}