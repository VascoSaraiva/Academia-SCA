import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import TituloHeader from "../títulos/titulo_header"

export default function Header({titulo, texto, imagem}){

    useEffect(() => {
        AOS.init()
    }, [])


    return(
        <div style={{ backgroundImage: `url(${imagem})` }} className="bg-center bg-azul2 bg-cover h-[75vh] mb-2 sm:mb-5 relative">


            <div className="bg-gradient-to-t from-azul2 absolute bottom-0 h-[75vh] w-full"></div>

            <div data-aos="fade-up" data-aos-delay='500' className="flex flex-col  justify-center items-center text-branco text-center h-[75vh] absolute mx-auto left-0 right-0">
                <TituloHeader>{titulo}</TituloHeader>
                <p className="text-branco w-[270px]  mx-auto mt-3">{texto}</p>
            </div>


        </div>
    )
}