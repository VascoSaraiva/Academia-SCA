import apresentacao from '../../assets/vídeos/apresentação.mp4'
import TituloHeader from '../títulos/titulo_header'
import logo from '../../assets/imagens/logo_branco_simples.png'
import backgroundVertentes from '../../assets/imagens/backgrounds/backgroundVertentes.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function VertentesHeader(){

    useEffect(() => {
        AOS.init()
    }, [])
    
    return (
        <div style={{ backgroundImage: `url(${backgroundVertentes})` }}  className='w-full bg-top bg-cover h-[100vh] relative'>
            <div className='h-[100vh] w-full absolute bottom-0 bg-gradient-to-t from-azul2 '>
            </div>

            <div data-aos="fade-up" data-aos-delay='500' className='h-[100vh] w-full absolute top-0 flex flex-col justify-center text-branco items-center'>

                <div className='text-center'>
                    <TituloHeader>Vertentes</TituloHeader>
                    <p className="text-branco w-[270px] mx-auto mt-3">Informa-te sobre as vertentes que temos disponíveis para ti.</p>
                </div>
            </div>


            <a href='https://www.instagram.com/explore/tags/sailaveiro/' target='target_blank' className='text-branco bg-none border border-branco transition-colors duration-200 hover:text-azul2 hover:bg-branco absolute bottom-0 mb-14 mx-auto left-0 right-0 w-fit text-center font-unbounded font-medium px-8 py-3 rounded-full'>#SAILAVEIRO</a>


        </div>



    )
}