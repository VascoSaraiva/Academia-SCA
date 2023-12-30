import Slide1 from "../../assets/imagens/slider_aulas/slide1.webp";
import Slide2 from "../../assets/imagens/slider_aulas/slide2.webp";
import Slide3 from "../../assets/imagens/slider_aulas/slide3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import Botao1 from "../botões/botao1";
import Titulo from "../títulos/titulo";
import Icone from "../ícones/display_icones"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SliderAulas() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (

        <div className="lg:container mx-auto" data-aos="fade-up" data-aos-delay="200" >
            <Swiper id="slider_aulas" className="lg:rounded-xl cursor-grab" navigation={window.innerWidth > 1024 ? true : false} loop={true} speed={500} pagination={{ clickable: true }} modules={[Pagination, Navigation, Autoplay]}>

                <SwiperSlide className="relative">
                    <img loading='lazy'  alt="Imagem de Nuno Barreto a ensinar os alunos da Academia" className=" object-cover w-screen h-screen lg:mx-auto lg:h-[650px]  lg:max-w-[1000px] xl:max-w-[1200px] xl:h-[750px] 2xl:max-w-[1446px] 2xl:h-[800px]" src={Slide1} />



                    <div className="flex flex-col justify-between items-center text-center h-full text-branco absolute inset-0 z-20 ">

                        <div className="flex justify-center lg:justify-between w-full lg:mx-auto lg:max-w-[1000px] xl:max-w-[1200px] px-8 2xl:max-w-[1446px]">
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8">
                                <p>Estágio Nuno Barreto</p>
                            </div>
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8 hidden lg:block">
                                <p>Experiências</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-eventos_laranja p-4 mb-2 lg:mb-4 w-fit mx-auto rounded-xl"><Icone tipo='chapéu_licenciatura' viewbox='0 0 100 100' className="fill-branco w-10 h-10 md:w-12 md:h-12" /></div>
                            <h1 className='font-unbounded text-[30px] md:text-[50px] font-medium text-center md:mt-2 md:mb-3 max-w-[350px] leading-[3.3rem]'>Aprender</h1>
                            <p className="max-w-[320px] mx-auto md:mb-3">Gostarias de começar a aprender vela? Informar-te sobre as diferentes vertentes da Academia de Vela.</p>
                            <Link to='/vertentes' className="mb-28 block"><Botao1 cor='branco'> + Informações</Botao1></Link>
                        </div>
                    </div>

                    <div className="h-[85vh] top-[15vh] lg:max-w-[1000px] mx-auto lg:h-[400px] lg:top-[250px] xl:max-w-[1200px] xl:h-[500px] 2xl:max-w-[1446px] 2xl:h-[600px] absolute inset-0 bg-gradient-to-t from-preto">
                    </div>
                </SwiperSlide>





                <SwiperSlide className="relative">
                    <img loading='lazy' alt="Imagem da ria de Aveiro" className="object-cover w-screen h-screen lg:mx-auto lg:h-[650px] lg:max-w-[1000px] xl:max-w-[1200px] xl:h-[750px] 2xl:max-w-[1446px] 2xl:h-[800px]" src={Slide2} />

                    <div className="flex flex-col justify-between items-center text-center h-full text-branco absolute inset-0 z-20 ">

                        <div className="flex justify-center lg:justify-between w-full lg:mx-auto lg:max-w-[1000px] xl:max-w-[1200px] px-8 2xl:max-w-[1446px]">
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8">
                                <p>Ria de Aveiro</p>
                            </div>
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8 hidden lg:block">
                                <p>Voluntariado</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-eventos_verde p-4 mb-2 lg:mb-4 w-fit mx-auto rounded-xl"><Icone tipo='planeta' viewbox='0 0 100 100' className="fill-branco w-10 h-10 md:w-12 md:h-12" /></div>
                            <h1 className='font-unbounded text-[30px] md:text-[50px] font-medium text-center md:mt-2 md:mb-3 max-w-[350px] leading-[3.3rem]'>Ambiente</h1>
                            <p className="max-w-[320px] mx-auto md:mb-3">Apostamos na consciencialização e na participação ativa dos nossos velejadores na preservação do ambiente.</p>
                            <Link to='/voluntariado' className="mb-28 block"><Botao1 cor='branco'>Ver voluntariado</Botao1></Link>
                        </div>
                    </div>

                    <div className="h-[85vh] top-[15vh] lg:max-w-[1000px] mx-auto lg:h-[400px] lg:top-[250px] xl:max-w-[1200px] xl:h-[500px] 2xl:max-w-[1446px] 2xl:h-[600px] absolute inset-0 bg-gradient-to-t from-preto">
                    </div>
                </SwiperSlide>











                <SwiperSlide className="relative">
                    <img loading='lazy'  alt="imagem da regata de santa joana 2023" className="object-cover w-screen h-screen lg:mx-auto lg:h-[650px] lg:max-w-[1000px] xl:max-w-[1200px] xl:h-[750px] 2xl:max-w-[1446px] 2xl:h-[800px]" src={Slide3} />

                    <div className="flex flex-col justify-between items-center text-center h-full text-branco absolute inset-0 z-20 ">

                        <div className="flex justify-center lg:justify-between w-full lg:mx-auto lg:max-w-[1000px] xl:max-w-[1200px] px-8 2xl:max-w-[1446px]">
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8">
                                <p>Regata Santa Joana 2023</p>
                            </div>
                            <div className="bg-preto bg-opacity-60 rounded-full px-8 py-3 mt-8 hidden lg:block">
                                <p>Galeria</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-eventos_azul p-4 mb-2 lg:mb-4 w-fit mx-auto rounded-xl"><Icone tipo='medalha' viewbox='0 0 70 100' className="fill-branco w-10 h-10 md:w-12 md:h-12" /></div>
                            <h1 className='font-unbounded text-[30px] md:text-[50px] font-medium text-center md:mt-2 md:mb-3 max-w-[350px] leading-[3.3rem]'>Galeria</h1>
                            <p className="max-w-[320px] mx-auto md:mb-3">Visita a nossa galeria para recordares alguns dos momentos vividos na Academia de vela.</p>
                            <Link to='/galeria' className="mb-28 block"><Botao1 cor='branco'>Ver galeria</Botao1></Link>
                        </div>
                    </div>

                    <div className="h-[85vh] top-[15vh] lg:max-w-[1000px] mx-auto lg:h-[400px] lg:top-[250px] xl:max-w-[1200px] xl:h-[500px] 2xl:max-w-[1446px] 2xl:h-[600px] absolute inset-0 bg-gradient-to-t from-preto">
                    </div>
                </SwiperSlide>







            </Swiper>

        </div>
    )
}