import Botao1 from '../botões/botao1';
import Icone from '../ícones/display_icones';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CardEventos({ titulo, descricao, tematica, data, hora, inscricaoURL, imagem, _id }) {

    const [corTematica, setCorTematica] = useState(null)
    const [iconeTematica, setIconeTematica] = useState(null)

    useEffect(() => {
        AOS.init()
    }, [])

    if (!corTematica && !iconeTematica) {
        switch (tematica) {
            case 'Aprendizagem':
                setCorTematica('#F07246')
                setIconeTematica(['chapéu_licenciatura', '0 0 100 85'])
                break;
            case 'Lazer':
                setCorTematica('#aa30ac')
                setIconeTematica(['smile', '0 0 100 100'])
                break;
            case 'Competição':
                setCorTematica('#0083D3')
                setIconeTematica(['medalha', '0 0 75 100'])
                break;
            case 'Voluntariado':
                setCorTematica('#20BA26')
                setIconeTematica(['planeta', '0 0 100 100'])
                break;
        }
    }

    let date = new Date(data)
    const day = date.getDate().toString().padStart(2, '0');         // Get the day (padded with leading zero if necessary)
    const month = date.toLocaleString('pt-PT', { month: 'long' }); // Get the month (adding 1 as it is zero-based, padded with leading zero if necessary)
    const formattedDate = `${day} ${month}`


    if (corTematica && iconeTematica) {
        return (
            <div data-aos="fade-up" data-aos-delay='300' className='m-3 sm:m-7'>
                <div className="bg-branco shadow-xl flex flex-col items-center justify-center max-w-[420px] mx-auto text-preto rounded-xl transition ease-in-out lg:hover:shadow-2xl lg:hover:scale-105 duration-300">

                    <div className='relative w-full'>

                        <div className='flex justify-center items-center relative rounded-t-xl min-h-[200px] xs:min-h-[280px]'>
                            <Icone id={`loadingEvento${_id}`} tipo='loading' viewbox='0 0 100 100' className='w-12 h-12 animate-spin absolute' />
                            <img loading='lazy' alt='imagem ilustrativa de evento' onLoad={e => { e.currentTarget.style.opacity = '1'; document.getElementById(`loadingEvento${_id}`).style.display = 'none' }} className='h-[200px] xs:h-[280px] lg:h-[300px] opacity-0 w-full rounded-t-xl object-cover' src={imagem} />
                        </div>

                        <div style={{ backgroundColor: corTematica }} className={`text-branco font-unbounded px-8 py-3 rounded-br-3xl rounded-tl-xl absolute top-0 flex items-center justify-center font-medium`}>
                            <Icone tipo={iconeTematica[0]} viewbox={iconeTematica[1]} className='fill-branco w-6 h-6 mr-2' />
                            {tematica}
                        </div>
                    </div>


                    <div style={{ backgroundColor: corTematica }} className={`flex justify-between w-full text-branco font-medium`}>

                        <div className='text-[17px] w-1/2 flex items-center justify-center font-unbounded py-3'>
                            <Icone tipo='calendário_eventos' viewbox='0 0 100 100' className='fill-branco w-5 h-5 mr-2' />
                            <h1 className='mt-0.5'>{formattedDate}</h1>
                        </div>

                        <div className='text-[17px] w-1/2 border-l-2 border-branco flex items-center justify-center font-unbounded py-3'>
                            <Icone tipo='relógio' viewbox='0 0 100 100' className='fill-branco w-5 h-5 mr-2' />
                            <h1 className='mt-0.5'>{hora}h</h1>
                        </div>
                    </div>

                    <div className='px-4 sm:px-7 pt-6 pb-2'>
                        <h1 className='font-unbounded font-medium text-[18px] md:text-[20px] pb-1'>{titulo}</h1>


                        {inscricaoURL ?
                            <div>
                                <p className={'text-cinzento3 pb-3'}>{descricao}</p>
                                <div className='w-full grid'>
                                    <a className='text-center' target='_blank' href={inscricaoURL}><Botao1>Inscrever-me</Botao1></a>
                                </div>
                            </div>
                            : <p className={'text-cinzento3 pb-5'}>{descricao}</p>}

                    </div>

                </div>
            </div>
        )
    }





}