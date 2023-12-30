import foto1 from '../../assets/imagens/sobre_nos/foto1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function HistoriaSobreNos() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div data-aos="fade-up" data-aos-delay="300" className="bg-azul2 lg:flex justify-between items-center lg:container xl:w-[1200px]">
            <div className="container mx-auto text-branco py-20 sm:px-0 sm:w-[500px] lg:w-[400px] xl:w-[500px] lg:ml-0 ">
                <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center sm:text-left font-semibold pb-10 sm:pb-5">História</h1>
                <p className="pb-5">O Sporting Clube de Aveiro (SCA) foi fundado a 21 de março de 1951, tendo como base
                    as modalidades de vela e motonáutica, impulsionadas graças a um grupo de sócios
                    entusiastas destas modalidades. Ao longo dos anos muitas foram as provas organizadas
                    pela secção de vela, quer de âmbito regional ou nacional, tendo no seu palmarés vários
                    títulos de âmbito regional e nacional, de várias classes de vela. A Academia de Vela é um
                    dos clubes mais antigos da Ria de Aveiro, responsável por fomentar a prática da vela,
                    tanto na vertente de competição, como na vertente de lazer. No âmbito do desporto
                    universitário, a Academia de Vela possui um protocolo com a Associação Académica da
                    Universidade de Aveiro e desenvolve, frequentemente, atividades em parceria com a
                    própria UA.</p>


            </div>

            <figure data-aos="fade-up" data-aos-delay="300"  className='relative flex justify-center lg:mt-20 pb-20'>
                <img loading='lazy'  alt='Foto de barcos na regata de santa joana 2023' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto1} />
                <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da Regata Santa Joana 2023</p>
            </figure>

        </div>
    )
}