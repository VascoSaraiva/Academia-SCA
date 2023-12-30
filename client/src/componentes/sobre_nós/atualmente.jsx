import foto2 from '../../assets/imagens/sobre_nos/foto2.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AtualmenteSobreNos() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div className="lg:flex justify-between items-center lg:container xl:w-[1200px] ">

            <figure  data-aos="fade-up" data-aos-delay="300" className='relative justify-center lg:mt-20 pb-20 hidden lg:flex'>
                <img loading='lazy'  alt='Foto de barcos na regata de santa joana 2023' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto2} />
                <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da Regata Santa Joana 2023</p>
            </figure>

            <div data-aos="fade-up" data-aos-delay="300" className="container mx-auto py-20 sm:px-0 sm:w-[500px] lg:w-[400px] xl:w-[500px] lg:mr-0 ">
                <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center sm:text-left font-semibold pb-10 sm:pb-5">Atualmente</h1>
                <p className="pb-5 text-cinzento3">A Academia de Vela SCA/AAUAv têm desempenhado papéis significativos na promoção e desenvolvimento do desporto da vela, bem como na formação de atletas competentes.</p>

                <p className="pb-5 text-cinzento3">
                A Academia tem se destacado como uma instituição que oferece treinamento de alta qualidade para velejadores de diferentes faixas etárias e níveis de habilidade. Com uma equipa de instrutores experientes e um ambiente propício ao aprendizado, a Academia tem contribuído para o crescimento e a popularização da vela na região.
                </p>
            </div>

            <figure  data-aos="fade-up" data-aos-delay="300" className='relative flex justify-center lg:mt-20 pb-20 lg:hidden'>
                <img loading='lazy'  alt='Foto de barcos na regata de santa joana 2023'  className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto2} />
                <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da Regata Santa Joana 2023</p>
            </figure>

        </div>
    )
}




