import { useEffect, useState } from "react";
import Axios from 'axios'
import Icone from '../componentes/ícones/display_icones'
import Convite from "../componentes/convites/convite";
import FormulárioEmail from "../componentes/formulários/formulário_email";
import backgroundHeader from '../assets/imagens/backgrounds/backgroundContactos.webp'
import Header from "../componentes/headers/header";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Contactos() {

    const [data, setData] = useState()
   
    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0);
        Axios.get(`${import.meta.env.VITE_SERVER}/getContactos`)
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, [])

    if (data) {

        const sortOrder = ['Telefone', 'Email Geral', 'Email Cursos', 'Morada', 'WhatsApp', 'Instagram', 'Facebook', 'Youtube', 'LinkedIn', 'TikTok'];
        data.sort((a, b) => {
            const indexA = sortOrder.indexOf(a.tipo);
            const indexB = sortOrder.indexOf(b.tipo);
            return indexA - indexB;
          });

        return (
            <div>
                <Header titulo='Contactos' texto='Estes são os eventos que se irão realizar brevemente.' imagem={backgroundHeader} />
                <div data-aos="fade-up" data-aos-delay="500" className="max-w-[800px] mx-auto pt-10 pb-20">

                    {data.map(e => {

                        let icone = '';

                        if (e.tipo === 'Telefone') {
                            icone = <Icone tipo='telefone' viewbox='0 0 100 100' className='h-6 w-6' />
                        }


                        if (e.tipo === 'Email Cursos' || e.tipo === 'Email Geral') {
                            icone = <Icone tipo='carta' viewbox='0 0 100 100' className='h-6 w-6' />
                        }

                        if (e.tipo === 'Morada') {
                            icone = <Icone tipo='mapa' viewbox='0 0 70 100' className='h-6 w-6' />
                        }


                        if (e.tipo === 'WhatsApp') {
                            icone = <Icone tipo='whatsapp' viewbox='0 0 100 100' className='h-6 w-6' />
                        }

                        if (e.tipo === 'Facebook') {
                            icone = <Icone tipo='facebook_2' viewbox='0 0 100 100' className='h-6 w-6  fill-[#4267B2]' />
                        }

                        if (e.tipo === 'Instagram') {
                            icone = <Icone tipo='instagram_2' viewbox='0 0 100 98' className='h-6 w-6 fill-[#E1306C]' />
                        }

                        if (e.tipo === 'LinkedIn') {
                            icone = <Icone tipo='linkedin_2' viewbox='0 0 100 100' className='h-6 w-6 fill-[#0077b5]' />
                        }

                        if (e.tipo === 'Youtube') {
                            icone = <Icone tipo='youtube_2' viewbox='0 0 100 73' className='h-6 w-6 fill-[#FF0000]' />
                        }

                        if (e.tipo === 'TikTok') {
                            icone = <Icone tipo='tiktok_2' viewbox='0 0 87 100' className='h-6 w-6' />
                        }


                       

                        return (
                            <a key={e.tipo} href={e.URL}>
                                <section key={e.tipo} className={`flex justify-between items-center container border-b py-5 border-cinzento1  ${e.URL ? ' transition-colors duration-150 lg:hover:bg-cinzento1 cursor-pointer' : ''}`}>
                                    <div className="mr-5">
                                        <p className="text-cinzento3 text-[12px]">{e.tipo}</p>
                                        <p className={`font-semibold ${e.URL ? 'underline' : ''}`}>{e.contacto}</p>
                                    </div>

                                    <div>
                                        {icone}
                                    </div>

                                </section>
                            </a>
                        )
                    })}
                </div>
                <Convite tipo='Eventos' />
                <div data-aos="fade-up" data-aos-delay="300" className="py-20">
                    <FormulárioEmail />
                </div>


            </div>
        )
    }

}