import Subitulo from '../títulos/subtitulo'
import Titulo from '../títulos/titulo'
import Icone from '../ícones/display_icones'
import efeitoCurvas from '../../assets/imagens/headers/curvas.webp'
import separadorCurva from '../../assets/imagens/separadores/curva.webp'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Missao(){

    useEffect(() => {
        AOS.init()
    }, [])

    return(
        <div className="bg-gradient-to-t from-[#102227] to-80% to-azul2 py-16 text-branco flex flex-col justify-center items-center md:h-screen relative">
            <Titulo>A Nossa Missão</Titulo>


            <div className='md:max-w-full md:w-full lg:w-[1010px] xl:w-[1100px] grid md:grid-cols-3 md:mt-10 mb-14 md:mb-20'>
                <div className='flex flex-col justify-center items-center my-10' data-aos='fade-up' data-aos-delay={window.innerWidth < 640 ? '100' : '100'}>
                    <Icone tipo='utilizador_up' viewbox='0 0 100 100' className='fill-branco w-10 h-10 mb-4' />
                    <Subitulo>Promover</Subitulo>
                    <p className='mt-2 text-center w-[14rem]'> Educação física, moral e intelectual dos seus associados.</p> 
                </div>

                <div className='flex flex-col justify-center items-center my-10' data-aos='fade-up' data-aos-delay={window.innerWidth < 640 ? '100' : '400'}>
                    <Icone tipo='cronómetro' viewbox='0 0 100 100' className='fill-branco w-10 h-10 mb-4' />
                    <Subitulo>Fomentar</Subitulo>
                    <p className='mt-2 text-center w-[14rem]'>A prática do desporto, tanto na vertente da recreação como na de competição.</p> 
                </div>

                <div className='flex flex-col justify-center items-center my-10' data-aos='fade-up' data-aos-delay={window.innerWidth < 640 ? '100' : '700'}>
                    <Icone tipo='estrela_check' viewbox='0 0 100 100' className='fill-branco w-10 h-10 mb-4' />
                    <Subitulo>Formar</Subitulo>
                    <p className='mt-2 text-center w-[14rem]'>Atletas competentes para o engrandecimento da cidade e de Portugal.</p> 
                </div>
            </div>

            
            <img loading='lazy'  className='w-full h-[400px] opacity-0 absolute bottom-50 md:opacity-30 transform scale-x-[-1]  object-cover' src={efeitoCurvas} />
            <img loading='lazy'  className='w-full absolute -bottom-1' src={separadorCurva} />
        </div>
    )
}