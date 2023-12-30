import TituloHeader from "../títulos/titulo_header"
import backgroundMeteorologia from '../../assets/imagens/backgrounds/backgroundMeteorologia.webp'
import Meteorologia2 from "../meteorologia/meteorologia2"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function MeteorologiaHeader() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div style={{ backgroundImage: `url(${backgroundMeteorologia})` }} className="bg-top flex justify-center items-center bg-cover h-[100vh] mb-2 sm:mb-5 relative">


            <div className="bg-gradient-to-t from-azul2 absolute bottom-0 h-[100vh] w-full"></div>

            <div data-aos="fade-up" data-aos-delay='500' className="flex flex-col  justify-center items-center text-branco text-center h-[75vh] absolute mx-auto left-0 right-0">
                <TituloHeader>Meteorologia</TituloHeader>
                <p className="text-branco w-[280px] mx-auto mt-3">Informa-te do estado do tempo aqui.</p>
                <p>Os dados são diários.</p>
                <div  className="mt-12 text-preto">
                    <Meteorologia2 />
                </div>

            </div>
            <div>

            </div>


        </div>
    )
}