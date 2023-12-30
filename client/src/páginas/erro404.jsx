import Botao1 from "../componentes/botões/botao1"
import { Link } from "react-router-dom"
import background from "../assets/imagens/backgrounds/erro404.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Erro404(){

    useEffect(() => {
        AOS.init()
    }, [])


    return(
        <div style={{backgroundImage: `url(${background})`}} className="bg-cover bg-center">
            <div className="h-[100vh] flex-col w-[280px] sm:w-[600px] md:w-[650px] lg:w-[820px] xl:w-[900px] mx-auto pt-40 md:pt-52">
            <div data-aos="fade-up" data-aos-delay="200" className="bg-cinzento1/80 p-8 shadow-xl">
            <div className="font-unbounded font-semibold text-[30px] md:text-[45px] lg:text-[55px] xl:text-[60px] text-verde mb-6">ERRO 404</div>
            <div>
                <p className="text-[18px] md:text-[24px] my-2 md:my-3 font-medium">Oops! Parece que os ventos te levaram para uma rota desconhecida...</p>
                <p className="text-[17px] md:text-[23px]  my-2 md:my-3 text-verde_escuro font-medium">Esta página que estás a tentar aceder não existe.</p>
                <Link to="/"><Botao1><div className="cursor-pointer">Ir para Homepage</div></Botao1></Link>
            </div></div>
            </div>
        </div>

    )
}