import apresentacao from '../../assets/vídeos/apresentação.mp4'
import TituloHeader from '../títulos/titulo_header'
import efeitoCurvas from '../../assets/imagens/headers/curvas.webp'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { browserName} from "react-device-detect";


export default function HomeHeader() {

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
        <div className={`w-full ${height} relative bg-azul2`}>
            <video className='w-full h-full object-cover' autoPlay muted loop >
                <source src={apresentacao} type="video/mp4" />
            </video>

            <div className={`${height}   w-full absolute bottom-0 bg-gradient-to-t from-azul2 `}>
            </div>

            <div className={`${height}   w-full absolute top-0 flex flex-col justify-center text-branco items-center`}>

                <div></div>

                <div className='text-center'>
                    <div data-aos="fade-in" data-aos-delay="600" data-aos-duration="900">
                        <p className='font-unbounded'>Bem vindo</p>
                        <hr className='border my-2 w-[2rem] mx-auto border-b-branco border-b-2' />
                    </div>

                    <div data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1200">
                        <TituloHeader>Academia de Vela <br /> SCA/AAUAv</TituloHeader>
                    </div>
                </div>
            </div>


            <a href='https://www.instagram.com/explore/tags/sailaveiro/' target='target_blank' className='text-branco bg-none border border-branco transition-colors duration-200 hover:text-azul2 hover:bg-branco absolute bottom-0 mb-14 mx-auto left-0 right-0 w-fit text-center font-unbounded font-medium px-8 py-3 rounded-full'>#SAILAVEIRO</a>


            <img loading='lazy'  alt=' ' className='w-full h-[300px] lg:h-[400px] opacity-60 absolute bottom-12 lg:bottom-40 object-cover' data-aos="fade-left" data-aos-duration="1000" src={efeitoCurvas} />
        </div>



    )

}