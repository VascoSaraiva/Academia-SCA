import apresentacao from '../../assets/vídeos/apresentação.mp4'
import TituloHeader from '../títulos/titulo_header'
import logo from '../../assets/imagens/logo_branco_simples.png'
import backgroundSobreNos from '../../assets/imagens/backgrounds/backgroundSobreNos.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { browserName} from "react-device-detect";

export default function SobreNosHeader(){

    useEffect(() => {
        AOS.init()
    }, [])

    let height;
    switch (browserName) {
        case 'Chrome':
            height = 'h-[100svh]'
            break;
        case 'Samsung Browser':
            height = 'h-[88vh]'
            break;
        default:
            height = 'h-screen'
            break;
    }
    
    return (
        <div style={{ backgroundImage: `url(${backgroundSobreNos})` }}  className={`w-full bg-top bg-cover ${height} relative`}>
            <div className={`${height} w-full absolute bottom-0 bg-gradient-to-t from-azul2 `}>
            </div>

            <div data-aos="fade-up" data-aos-delay='500' className={`${height} w-full absolute top-0 flex flex-col justify-center text-branco items-center`}>

                <div className='text-center'>
                    <img loading='lazy'  alt='Foto de barcos na regata de santa joana 2023' className='w-28 h-28 xs:w-32 xs:h-32 lg:w-40 lg:h-40 mx-auto mb-5' src={logo} />
                    <TituloHeader>Sobre Nós</TituloHeader>
                    <p className="text-branco w-[270px] mx-auto mt-3">Conhece quem somos e a nossa história enquanto Academia.</p>
                </div>
            </div>


            <a href='https://www.instagram.com/explore/tags/sailaveiro/' target='target_blank' className='text-branco bg-none border border-branco transition-colors duration-200 hover:text-azul2 hover:bg-branco absolute bottom-0 mb-14 mx-auto left-0 right-0 w-fit text-center font-unbounded font-medium px-8 py-3 rounded-full'>#SAILAVEIRO</a>


        </div>



    )
}