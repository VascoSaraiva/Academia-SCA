import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import Axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function SliderEquipa(props) {

    let windowWidth = props.windowResize()

    const [data, setData] = useState()
    const [dataFotos, setDataFotos] = useState()

    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_SERVER}/getMembros`)
            .then(res => {
                setData(res.data)
            })
            .catch(error => {
                console.log(error)
            })


        Axios.get(`${import.meta.env.VITE_SERVER}/getFotosMembros`)
            .then(res => {
                setDataFotos(res.data)
            })
            .catch(error => {
                console.log(error)
            })



            AOS.init()

    }, [])

    if (data && dataFotos) {
        return (

            <div  data-aos="fade-up" data-aos-delay="300" className="pt-20 pb-10">
                <div className="text-center">
                    <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-center font-semibold pb-10 sm:pb-5">Membros</h1>
                    <p className="text-cinzento3 mb-5 sm:w-[25rem] lg:w-[28rem] mx-auto container">Fica-nos a conhecer melhor a equipa da Academia.</p>
                </div>



                <Swiper
                    id="slider_equipa"
                    className="w-full md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1000px] mt-14 mb-20 cursor-grab"
                    slidesPerView={1}
                    initialSlide={1}
                    centeredSlides={windowWidth.width >= 1024 ? true : false}
                    navigation={windowWidth.width >= 1280 ? true : false}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },

                        1024: {
                            slidesPerView: 3
                        }
                    }}

                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation]}>
                    {data.map( e => {

                
                        return (
                            <SwiperSlide>
                                <div className="flex justify-center items-center flex-col cursor-grab">
                                    <img loading='lazy'  alt={`Foto de ${e.nome}`} src={(dataFotos.filter(obj => obj.name.slice(0, -4) === e.nome)).length != 0 ?  (dataFotos.filter(obj => obj.name.slice(0, -4) === e.nome))[0].webContentLink : (dataFotos.filter(obj => obj.name.slice(0, -4) === 'Padrão'))[0].webContentLink} className="rounded-2xl w-[280px] lg:w-[250px] xl:w-[280px]" />
                                    <div className="text-subtitulo_grande text-preto mt-4 font-bold">{e.nome}</div>
                                    <div className="text-cinzento3 font-light pb-10">{e.cargo}</div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>



            </div >


        )
    }


}