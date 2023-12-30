import TituloHeader from "../títulos/titulo_header"

import Icone from "../ícones/display_icones"
import backgroundGaleria from '../../assets/imagens/backgrounds/backgroundGaleria.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function GaleriaHeader() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div style={{ backgroundImage: `url(${backgroundGaleria})` }} className="bg-center bg-cover h-[85vh] mb-2 sm:mb-5 relative">


            <div className="bg-gradient-to-t from-azul2 absolute bottom-0 h-[85vh] w-full"></div>

            <div data-aos="fade-up" data-aos-delay='500' className="flex flex-col  justify-center items-center text-branco text-center h-[85vh] absolute mx-auto left-0 right-0">
                <Icone tipo='imagem' viewbox='0 0 100 100' className='w-12 xs:w-16 lg:w-20 mb-4 fill-branco' />
                <TituloHeader>Galeria</TituloHeader>
                <p className="text-branco mb-4 w-[270px] mx-auto mt-3">Revê aqui as várias fotografias da Academia de Vela SCA/AAUAv.
                </p>

              
            </div>




        </div>
    )
}