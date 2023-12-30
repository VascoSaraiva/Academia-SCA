import Icone from "../ícones/display_icones";
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Convite(props) {

    useEffect(() => {
        AOS.init()
    }, [])


    let conteudos;

    switch (props.tipo) {
        case 'Contactos':
            conteudos = {
                descrição: 'Precisas de nos contactar? Podes ver todos os nossos contactos na nossa página.',
                textoBotao: 'Ver Contactos',
                linkBotao: '/contactos',
                icone: 'telefone',
                viewbox: '0 0 100 100',
            }
            break;
        case 'Dúvidas':
            conteudos = {
                descrição: 'Tens alguma dúvida que gostarias de esclarecer? Visita a nossa página de perguntas frequentes.',
                textoBotao: 'Ver Dúvidas',
                linkBotao: '/duvidas',
                icone: 'informativo',
                viewbox: '0 0 90 90',
            }
            break;
        case 'Eventos':
            conteudos = {
                descrição: 'A Academia promove vários eventos em que poderás participar. Junta-te a nós!.',
                textoBotao: 'Ver Eventos',
                linkBotao: '/eventos',
                icone: 'calendário_estrela',
                viewbox: '0 0 86 100',
            }
            break;
        default:
            conteudos = {
                descrição: 'Precisas de nos contactar? Podes ver todos os nossos contactos na nossa página.',
                textoBotao: 'Ver Contactos',
                linkBotao: '/contactos',
                icone: 'telefone',
                viewbox: '0 0 100 100',
            }
            break;
    }

    if (conteudos) {
        return (
            <div className="mx-auto px-[1.6rem] sm:px-0 sm:bg-convite_1 sm:bg-contain sm:h-[250px] flex justify-center items-center">
                <div  data-aos="fade-up" data-aos-delay="300"   className="bg-cinzento1 sm:bg-branco sm:mx-0 w-full sm:w-fit p-8 flex flex-col sm:flex-row justify-center items-center rounded-xl sm:hover:-translate-y-2 sm:hover:shadow-xl duration-300">


                    <div className="bg-verde p-5 rounded-xl mb-4 sm:mb-0">
                        <Icone tipo={conteudos.icone} viewbox={conteudos.viewbox} className='h-7 w-7 sm:h-9 sm:w-9 fill-branco' />
                    </div>

                    <div className="max-w-[13rem] sm:max-w-none sm:w-[25rem] sm:pl-5 text-center sm:text-left">
                        <p className="text-cinzento3 mb-3 sm:mb-2">{conteudos.descrição}</p>
                        <Link to={conteudos.linkBotao} className="flex mx-auto sm:mx-0 items-center font-semibold text-verde sm:border-b-2  sm:border-b-branco sm:hover:border-b-verde w-fit sm:hover:cursor-pointer transition duration-200">{conteudos.textoBotao} <Icone tipo='seta' viewbox='0 0 75 100' className='h-3 w-3 pt-0.5 ml-1  fill-verde' /></Link>
                    </div>
                </div>


            </div>
        )
    }

}