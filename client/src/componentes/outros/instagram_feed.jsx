import { useEffect, useState } from "react"
import Axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import Titulo from "../títulos/titulo";
import Icone from "../ícones/display_icones";
import Botao1 from "../botões/botao1";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function InstagramFeed(props) {

    const [data, setData] = useState(null)
    let windowSize = props.windowResize()

    useEffect(() => {
        Axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=IGQVJVM2lFRmo2UVNCOHBTTXJOV1BWMkdqVkZAiaV9UakJTMVRhc2RUaGhOMFVBX0FVTU9BRmN6RVJxV2JONHoxTm50ZAWRvODZATMlZAFb0pZAOEU1YkIzOE1MVmtWZA1BSVGM5bVZAYSnBLUmFxM1JyZA0o4bgZDZD')
            .then(e => setData(e.data.data))
            .catch(error => console.log(error))
            AOS.init()
    }, [])


    if (data) {
   
        return (
            <div className="md:container text-center">
                <Icone tipo='instagram_2' viewbox='0 0 100 100' className=' w-12 h-12 fill-[#E1306C] mx-auto' />
                <Titulo>Visitar Instagram</Titulo>
                <p className="text-cinzento3 mb-8 sm:w-[25rem] lg:w-[28.5rem] mx-auto container md:w-full">Visita-nos no Instagram e ficar a par de todas as novidades da Academia de Vela SCA/AAUAv.</p>
                <Swiper id="swiperInstagram" className="flex items-center mb-10 hover:cursor-grab" autoplay={{delay: 1500, disableOnInteraction: false}}  loop={true} modules={[Autoplay]}
                slidesPerView={windowSize.width >= 1024 ? 3 : windowSize.width >= 640 ? 2 : 1}   
                >
                    {data.map(e => {
                        if (e.media_type === 'CAROUSEL_ALBUM' || e.media_type === 'IMAGE') {
                            return (
                                <SwiperSlide key={e.id}>
                                    <div data-aos="fade-up" data-aos-delay="200" className="relative h-[304px] w-[304px] lg:w-[300px] lg:h-[300px] mx-auto lg:mx-2 2xl:mx-auto xl:h-[380px] xl:w-[380px] 2xl:w-[466px] 2xl:h-[466px]">
                                        <img loading='lazy'  alt="publicação do instagram da academia" src={e.media_url} className="peer object-cover h-[304px] w-[304px] lg:w-[300px] lg:h-[300px] xl:h-[380px] xl:w-[380px] 2xl:w-[466px] 2xl:h-[466px]" />
                                        <figure className="border-branco peer-hover:opacity-100 hover:opacity-100 transition-opacity duration-200 opacity-0 border absolute top-2 right-2 p-1 rounded-lg ">
                                        <Icone tipo='instagram_2' viewbox='0 0 100 100' className=' w-5 h-5 fill-branco mx-auto' />
                                        </figure>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    })}
                </Swiper>
                <a target="target_blank" href="https://www.instagram.com/academiadevela_sca/"><Botao1 cor='preto'>Visitar Instagram</Botao1></a>
            </div>
        )

    }

}