import Icone from "../ícones/display_icones"
import Subitulo from "../títulos/subtitulo"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import Convite from "../convites/convite";
import { Pagination } from "swiper";
import Botao1 from "../botões/botao1";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";



export default function ConteudoBarcos({ data, active }) {

    const [dataFotos, setDataFotos] = useState(null)
    const [swiperCarousel, setSwiperCarousel] = useState(null)

    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_SERVER}/getGaleriaBarcos`)
            .then(response => {
                setDataFotos(response.data);
            })
            .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        if (swiperCarousel && !swiperCarousel.destroyed) {
            if (window.innerWidth < 768) {
                swiperCarousel.slideTo(0)
            } else {
                swiperCarousel.slideTo(1)
            }

        }
    }, [active])


    if (data && dataFotos) {

        let fotosGaleria = []

        dataFotos.map(e => e.map(i => {

            if (i.name.slice(0, -5) === data[active].nome) {
                fotosGaleria.push(i)
            }

        }))

        fotosGaleria.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))



        return (



            <div className="md:bg-azul2">

                <div className="container md:hidden">
                    <div className="flex justify-between items-center flex-col py-10 text-center [&>div]:my-10 first:mt-0 last:mb-0">

                        <div>
                            <Icone tipo='peso' viewbox="0 0 100 100" className="fill-preto w-10 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Peso</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].peso}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div>
                            <Icone tipo='par_pessoas' viewbox="0 0 100 74" className="fill-preto w-10 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Nº Tripulantes</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].tripulacaoMaxima}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div>
                            <Icone tipo='velocímetro' viewbox="0 0 100 85" className="fill-preto w-10 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Velocidade max</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].velocidadeMaxima} nós</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />



                        <div>
                            <Icone tipo='gráfico' viewbox="0 0 82 100" className="fill-preto w-9 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Nível</Subitulo>
                            <p className="text-cinzento3 mt-3">{`${data[active].nivelDificuldade}`}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div>
                            <Icone tipo='largura' viewbox="0 0 100 50" className="fill-preto w-10 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Comprimento</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].comprimento}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div>
                            <Icone tipo='altura' viewbox="0 0 50 100" className="fill-preto w-5 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Boca</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].boca}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div>
                            <Icone tipo='pincel' viewbox="0 0 100 100" className="fill-preto w-10 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Designer</Subitulo>
                            <p className="text-cinzento3 mt-3">{data[active].designer}</p>
                        </div>

                        <hr className="border border-cinzento1 w-full" />

                        <div className="mt-10">
                            <Icone tipo='mala' viewbox="0 0 100 90" className="fill-preto w-11 mx-auto mb-2 h-[55px]" />
                            <Subitulo>Construção</Subitulo>
                            <p className="mt-3">{data[active].materiais}</p>
                        </div>
                    </div>
                </div>



                {window.innerWidth < 768 && fotosGaleria.length != 0 ?
                    <div>
                        <Swiper onSwiper={s => setSwiperCarousel(s)} initialSlide={0} slidesPerView={1.1} spaceBetween={10} centeredSlides={true} className="my-10 px-3 md:hidden">

                            {fotosGaleria.map(e => {
                                return (
                                    <SwiperSlide key={e.id} className="flex justify-center">
                                        <img loading='lazy'  src={e.webContentLink} alt={data[active].nome} className="h-[450px] object-cover rounded-xl" />
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                        <div className="flex justify-center mb-12 md:hidden">
                            <Link to='/galeria'><Botao1 cor='preto'>Ver galeria</Botao1></Link>
                        </div>
                    </div> : window.innerWidth < 768 ? <div className="flex justify-center items-center flex-col"><hr className="border mb-10 border-cinzento1 w-full" /><Icone tipo='imagem' viewbox='0 0 100 100' className='w-14 h-14 mb-5 mt-40 fill-preto' /><p className="text-cinzento3 mb-40">Sem fotos disponíveis de momento.</p></div> : ''}



                <div id="detalhesBarcos" className="pt-20 hidden md:block"></div>
                <div className="hidden md:grid md:grid-cols-2 w-full lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] lg:mx-auto text-branco xl:grid-cols-4 box-content">

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco border-r border-b">
                        <Icone tipo='peso' viewbox="0 0 100 100" className="fill-branco w-10 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Peso</Subitulo>
                        <p className="mt-3">{data[active].peso}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco xl:border-r border-b">
                        <Icone tipo='par_pessoas' viewbox="0 0 100 74" className="fill-branco w-10 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Nº Tripulantes</Subitulo>
                        <p className="mt-3">{data[active].tripulacaoMaxima}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco border-r border-b">
                        <Icone tipo='velocímetro' viewbox="0 0 100 85" className="fill-branco w-10 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Velocidade max</Subitulo>
                        <p className="mt-3">{data[active].velocidadeMaxima} nós</p>
                    </div>



                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco border-b">
                        <Icone tipo='gráfico' viewbox="0 0 82 100" className="fill-branco w-9 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Nível</Subitulo>
                        <p className="mt-3">{data[active].nivelDificuldade}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco border-r border-b xl:border-b-0 ">
                        <Icone tipo='largura' viewbox="0 0 100 50" className="fill-branco w-10 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Comprimento</Subitulo>
                        <p className="mt-3">{data[active].comprimento}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco xl:border-r border-b xl:border-b-0">
                        <Icone tipo='altura' viewbox="0 0 50 100" className="fill-branco w-5 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Boca</Subitulo>
                        <p className="mt-3">{data[active].boca}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center border-branco border-r">
                        <Icone tipo='pincel' viewbox="0 0 100 100" className="fill-branco w-10 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Designer</Subitulo>
                        <p className="mt-3">{data[active].designer}</p>
                    </div>

                    <div className="py-12 text-center xl:py-16 box-content flex flex-col items-center">
                        <Icone tipo='mala' viewbox="0 0 100 90" className="fill-branco w-11 mx-auto mb-2 h-[55px]" />
                        <Subitulo>Construção</Subitulo>
                        <p className="mt-3">{data[active].materiais}</p>
                    </div>
                </div>
                <div className="pb-20 hidden md:block"></div>



                {window.innerWidth >= 768 && fotosGaleria.length != 0 ?

                    <div>
                        <Swiper id="slider_galeria_barcos"
                            onSwiper={s => setSwiperCarousel(s)}
                            modules={[Pagination]}
                            slidesPerView={1.5}
                            initialSlide={1}
                            spaceBetween={25}
                            centeredSlides={true}
                            autoplay={true}
                            pagination={{ clickable: false }}
                            className={`hidden md:block px-5 xl:px-56 2xl:px-64 pb-20 mt-20 mb-10 max-w-[1900px] hover:cursor-grab`}
                        >

                            {fotosGaleria.map(e => {
                                return (
                                    <SwiperSlide key={e.id} className="flex justify-center">
                                        <img loading='lazy'  src={e.webContentLink} alt={data[active].nome} className="object-cover h-[500px] rounded-xl" />
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                        <div className="mb-48 justify-center hidden md:flex">
                            <Link to='/galeria'><Botao1 cor='branco'>Ver galeria</Botao1></Link>
                        </div>
                    </div> : window.innerWidth >= 768 ? <div className="flex justify-center items-center flex-col mt-40 mb-60"><Icone tipo='imagem' viewbox='0 0 100 100' className='w-14 h-14 mb-5 fill-branco' /><p className="text-branco text-center">Sem fotos disponíveis de momento.</p></div> : ''}



                <div className="bg-cinzento1 mb-0">
                    <Convite tipo='Eventos' />
                </div>



            </div>

        )



    }


}