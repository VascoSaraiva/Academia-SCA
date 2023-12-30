import foto2 from '../../assets/imagens/cards_vertentes/Aprendizagem.webp'
import foto1 from '../../assets/imagens/cards_vertentes/Competição.webp'
import foto3 from '../../assets/imagens/cards_vertentes/Lazer.webp'
import Icone from '../ícones/display_icones'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function VertentesConteudo({ vertente }) {

    useEffect(() => {
        AOS.init()
    }, [])


    switch (vertente) {
        case 'Competição':
            return (
                <div data-aos="fade-up" data-aos-delay="300" id='divCompetição' className="lg:flex justify-between items-center lg:container xl:w-[1200px] ">

                    <figure className='relative justify-center lg:mt-20 pb-20 hidden lg:flex'>
                        <img loading='lazy'  alt='Foto da primeira prova da taça norte' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto1} />
                        <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da 1ª Prova da Taça Norte</p>
                    </figure>

                    <div className="container mx-auto py-20 sm:px-0 sm:w-[500px] lg:w-[400px] xl:w-[500px] lg:mr-0 ">

                        <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center sm:text-left font-semibold pb-10 sm:pb-5 flex items-center"><Icone tipo='medalha' viewbox='0 0 75 100' className='w-14 h-14 fill-branco p-3 rounded-lg mr-2 bg-eventos_azul' />  Competição</h1>
                        <p className="pb-5 text-cinzento3">A vertente competitiva da modalidade de vela desperta uma intensa paixão e rivalidade entre os velejadores, que se esforçam para alcançar a excelência e conquistar a vitória. Nessa emocionante luta, a habilidade técnica, a estratégia e a resistência física são testadas ao máximo.</p>

                        <p className="pb-5 text-cinzento3"> Os velejadores enfrentam condições desafiadoras de vento e mar, exigindo adaptação rápida e decisões inteligentes para superar obstáculos e alcançar a linha de chegada.</p>

                        <p className="pb-5 text-cinzento3">
                            A competição na vela é um verdadeiro espetáculo de destreza, trabalho em equipa e determinação, onde cada manobra, cada ajuste de vela e cada movimento tático podem fazer a diferença entre o triunfo e a derrota. É um ambiente onde os velejadores encontram a emoção da superação pessoal, a camaradagem entre concorrentes e a satisfação de alcançar os mais altos níveis de desempenho na busca por medalhas e reconhecimento no cenário competitivo da vela.
                        </p>
                    </div>

                    <figure className='relative flex justify-center lg:mt-20 pb-20 lg:hidden'>
                        <img loading='lazy'  alt='Foto da primeira prova da taça norte' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto1} />
                        <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da 1ª Prova da Taça Norte</p>
                    </figure>

                </div>
            )
        case 'Aprendizagem':
            return (
                <div data-aos="fade-up" data-aos-delay="300"  id='divAprendizagem' className="lg:flex justify-between items-center lg:container xl:w-[1200px]">
                    <div className="container mx-auto text-preto py-20 sm:px-0 sm:w-[500px] lg:w-[400px] xl:w-[500px] lg:ml-0 ">
                        <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center sm:text-left font-semibold pb-10 sm:pb-5 flex items-center"><Icone tipo='chapéu_licenciatura' viewbox='0 0 100 100' className='w-14 h-14 fill-branco p-3 rounded-lg mr-2 bg-eventos_laranja' />Apredizagem</h1>
                        <p className="pb-5 text-cinzento3">A vertente de aprendizagem na modalidade de vela é uma oportunidade fascinante para os novatos adquirirem habilidades náuticas e explorarem o mundo da vela. Nesse ambiente, os iniciantes são guiados por treinadores experientes que compartilham o seu conhecimento teórico e prático, ensinando desde os fundamentos básicos até técnicas avançadas. Aprendendo a manusear velas, entender os ventos e dominar as manobras, os aspirantes a velejadores desenvolvem confiança, segurança e uma conexão única com o mar.</p>

                            <p className="pb-5 text-cinzento3">Além disso, a vertente de aprendizagem oferece uma oportunidade de conectar-se com outros entusiastas da vela, compartilhar experiências e construir amizades duradouras. É um ambiente acolhedor e encorajador, onde cada progresso alcançado traz uma sensação de realização e motivação para continuar a aprimorar as habilidades náuticas.</p>


                    </div>

                    <figure className='relative flex justify-center lg:mt-20 pb-20'>
                        <img loading='lazy'  alt='Foto da primeira prova da taça norte' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto2} />
                        <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da 1ª Prova da Taça Norte</p>
                    </figure>

                </div>
            )
        case 'Lazer':
            return (
                <div data-aos="fade-up" data-aos-delay="300"  id='divLazer' className="lg:flex justify-between items-center lg:container xl:w-[1200px] ">

                    <figure className='relative justify-center lg:mt-20 pb-20 hidden lg:flex'>
                        <img loading='lazy'  alt='Foto da primeira prova da taça norte' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto3} />
                        <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da 1ª Prova da Taça Norte</p>
                    </figure>

                    <div className="container mx-auto py-20 sm:px-0 sm:w-[500px] lg:w-[400px] xl:w-[500px] lg:mr-0 ">
                        <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center sm:text-left font-semibold pb-10 sm:pb-5 flex items-center"><Icone tipo='smile' viewbox='0 0 100 100' className='w-14 h-14 fill-branco p-3 rounded-lg mr-2 bg-eventos_roxo' />  Lazer</h1>
                        <p className="pb-5 text-cinzento3">A vertente de lazer na modalidade de vela proporciona uma experiência única de relaxamento e prazer, permitindo que os seus praticantes desfrutem da ondulação do mar enquanto navegam ao sabor do vento. Nessa abordagem, a vela é apreciada como uma forma de conectar-se com a natureza, aproveitar momentos de divertimento e criar memórias inesquecíveis.</p>

                        <p className='pb-5 text-cinzento3'>Esta vertente oferece uma fuga relaxante da agitação do dia a dia, permitindo que os praticantes se desconectem e apreciem o cenário marítimo em toda a sua beleza e calma.</p>
                    </div>

                    <figure className='relative flex justify-center lg:mt-20 pb-20 lg:hidden'>
                        <img loading='lazy'  alt='Foto da primeira prova da taça norte' className='h-screen w-full object-cover sm:h-auto sm:w-[500px] lg:w-[450px] xl:w-[500px] lg:h-[600px] sm:rounded-lg' src={foto3} />
                        <p className='bg-preto bg-opacity-60 text-branco w-fit px-5 py-3 h-fit rounded-full absolute top-0 mt-6'>Foto da 1ª Prova da Taça Norte</p>
                    </figure>

                </div>
            )
    }

}