import { useEffect } from "react";
import Botao2 from "../botões/botao2"
import Subitulo from "../títulos/subtitulo"
import Icone from "../ícones/display_icones"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'


export default function CardVertentes({ titulo, texto, imagemSrc, cor, icone }) {

    useEffect(() => {
        AOS.init()
    }, [])

    let viewbox;
    let background;
    let delay;
    let ligacao;

    

    switch (cor) {
        
        case '1293E2':
            background = 'from-eventos_azul'
            delay = window.innerWidth > 640 ? '300' : '0'
            viewbox = '0 0 75 100'
            ligacao = 'divCompetição'
            break;
        case 'F07246':
            background = 'from-eventos_laranja'
            delay = window.innerWidth > 640 ? '500' : '0'
            viewbox = '0 0 100 85'
            ligacao = 'divAprendizagem'
            break;
        case 'AA30AC':
            background = 'from-eventos_roxo'
            delay = window.innerWidth > 640 ? '700' : '0'
            viewbox = '0 0 100 100'
            ligacao = 'divLazer'
            break;


    }

    return (
        <div data-aos="fade-up" data-aos-delay={delay}>
            <div className={`relative max-w-s min-h-[500px] overflow-hidden rounded-2xl mx-2 sm:mx-4 md:mx-7 lg:mx-5 xl:mx-10 w-fit text-branco transition ease-in-out lg:hover:shadow-2xl lg:hover:scale-105 duration-300`}>
                <img loading='lazy'  src={imagemSrc} alt="vertente" className="w-[320px] h-[500px] object-cover lg:w-[300px] xl:w-[370px]" />

                <div style={{ backgroundColor: `#${cor}` }} className={`absolute top-0 justify-center text-center py-5 px-5 rounded-br-[1rem]`}>
                    <Icone tipo={icone} viewbox={viewbox} className='overflow-visible fill-branco h-7 w-7' />
                </div>


                <div className={`absolute justify-end flex flex-col bg-gradient-to-t from-preto hover:${background} p-3 md:p-4 bottom-0 h-[350px] lg:pt-72 text-center`}>
                    <Subitulo>{titulo}</Subitulo>
                    <p className="mt-2 mb-1">{texto}</p>
                    <Link to='/vertentes' className="w-full" ><Botao2 className='w-full' cor='branco'>Ver mais</Botao2></Link>
                </div>

            </div>
        </div>
    )
}