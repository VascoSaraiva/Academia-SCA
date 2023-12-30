
import Header from "../componentes/headers/header";
import Icone from "../componentes/ícones/display_icones.jsx"
import backgroundHeader from '../assets/imagens/backgrounds/header_beneficios.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Beneficios(){

    useEffect(() => {
        AOS.init()
    }, [])


    return(
        <div>
        <Header titulo='Benefícios' texto='Praticar vela traz benefícios físicos e mentais?' imagem={backgroundHeader} />

        <div data-aos="fade-up" data-aos-delay="300" className="mx-4 sm:mx-6 md:w-[710px] lg:w-[860px] xl:w-[1000px] 2xl:w-[1400px] md:mx-auto my-14">
            <h1 className="text-subtitulo_grande font-unbounded mb-4 font-semibold">A pratica de vela ajuda...</h1>
            <div className="text-cinzento3">
            A prática da modalidade de vela oferece uma série de benefícios tanto para o corpo quanto para a mente. O primeiro benefício notável é o fortalecimento físico. A vela exige uma combinação de força, equilíbrio e resistência, já que os velejadores precisam controlar as velas e manobrar o barco de acordo com as condições do vento. Isso resulta em um treino completo para o corpo, fortalecendo os músculos do tronco, braços e pernas, além de melhorar a coordenação motora. Além disso, a vela também promove a conexão com a natureza, proporcionando uma experiência única e relaxante. A sensação de estar no mar, o som das ondas e a brisa refrescante contribuem para um estado de calma e bem-estar mental, reduzindo o stress e aumentando a sensação de liberdade. A vela é uma atividade que permite desconectar-se do mundo agitado e conectar-se com a natureza, proporcionando uma verdadeira pausa para a mente.
            </div>
        </div>


        <div className="mx-4 sm:mx-6 md:w-[710px] lg:w-[860px] xl:w-[1000px] 2xl:w-[1400px] md:mx-auto my-14">
        <h1 data-aos="fade-up" data-aos-delay="300" className="text-subtitulo_grande font-unbounded mb-4 font-semibold">Benefícios físicos</h1>
            <div data-aos="fade-up" data-aos-delay="300"  className="text-cinzento3">
            A vela fortalece os músculos, melhora a coordenação motora e desenvolve a resistência física. É um excelente exercício completo que contribui para a força muscular, resistência, saúde e aptidão física de forma geral.
            <p  data-aos="fade-up" data-aos-delay="300" >Desta forma os principais benefícios fisicos da prática da modalidade de vela são:</p>
            
            </div>

            <div  data-aos="fade-up" data-aos-delay="300"  className="mx-auto justify-center mt-6 text-center md:flex md:justify-between md:w-[710px] lg:w-[860px] xl:w-[1000px] 2xl:w-[1400px] font-unbounded font-semibold">
                <div className="bg-cinzento1 px-7 py-9 my-7 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="força" viewbox="0 0 55 50" className="h-10 w-10 mx-auto mb-4"/><div>Maior coordenação motora</div></div>
                <div className="bg-cinzento1 px-7 py-9 my-7 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="resistencia" viewbox="0 0 57 57" className="h-10 w-10 mx-auto mb-4"/><div>Maior Resistência</div></div>
                <div className="bg-cinzento1 px-7 py-9 my-7 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="saude_fisica" viewbox="0 0 60 50" className="h-10 w-10 mx-auto mb-4"/><div>Melhor Saúde física</div></div>
            </div>

        </div>

        <div className="mx-4 sm:mx-6 md:w-[710px] lg:w-[860px] xl:w-[1000px] 2xl:w-[1400px] md:mx-auto mt-14 mb-32">
        <h1  data-aos="fade-up" data-aos-delay="300"  className="text-subtitulo_grande font-unbounded mb-4 font-semibold">Benefícios mentais</h1>
            <div data-aos="fade-up" data-aos-delay="300"  className="text-cinzento3">
            A vela proporciona benefícios mentais significativos, como a sensação de paz e tranquilidade ao estar em contato com a natureza. A prática requer concentração e foco, o que promove clareza mental e alívio do stress. A vela também oferece um refúgio da agitação diária, permitindo que os praticantes encontrem equilíbrio mental e se conectem consigo mesmos.
            <p data-aos="fade-up" data-aos-delay="300" >
            Desta forma os principais benefícios mentais são:</p>
            </div>

            
            <div data-aos="fade-up" data-aos-delay="300"  className="mx-auto justify-center mt-6 text-center md:flex md:justify-between md:w-[710px] lg:w-[860px] xl:w-[1000px] 2xl:w-[1400px] font-unbounded font-semibold">
                <div className="bg-cinzento1 my-7 px-7 py-9 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="bem_estar" viewbox="0 0 55 50" className="h-10 w-10 mx-auto mb-4"/><div>Bem-estar pessoal</div></div>
                <div className="bg-cinzento1 my-7 px-7 py-9 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="foco" viewbox="0 0 70 30" className="h-10 w-10 mx-auto mb-4"/><div>Maior foco e atenção</div></div>
                <div className="bg-cinzento1 my-7 px-7 py-9 w-[280px] sm:w-[400px] md:w-[230px] lg:w-[270px] xl:w-[300px] xl:py-12 shadow-xl mx-auto md:mx-0"><Icone tipo="raciocinio" viewbox="0 0 55 50" className="h-10 w-10 mx-auto mb-4"/><div>Desenvolve o raciocinio</div></div>
            </div>

        </div>     
        </div>
    )
}