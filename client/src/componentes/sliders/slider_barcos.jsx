import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade } from "swiper";
import curvasEfeito from "../../assets/imagens/barcos/curvas.webp"
import Botao1 from "../botões/botao1";
import Axios from 'axios'
import { useEffect, useState } from "react";
import ConteudoBarcos from "../conteúdo_barcos/conteúdos_barcos";
import Icone from "../ícones/display_icones";
import backgroundBarcos from '../../assets/imagens/barcos/backgroundBarcos.webp'


export default function SliderBarcos() {

    const [data, setData] = useState(null)
    const [dataFotos, setDataFotos] = useState(null)
    const [error, setError] = useState(false)

    let [barcoActive, setBarcoActive] = useState(0)

    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_SERVER}/getBarcos`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                setError(true)
                console.log(err)
            });

        Axios.get(`${import.meta.env.VITE_SERVER}/getFotosBarcos`)
            .then(res => {
                setDataFotos(res.data)
            })
            .catch(err => {
                setError(true)
                console.log(err)
            });
    }, [])


    if (data && dataFotos) {
        return (
            <div>

                <div style={{ backgroundImage: `url(${backgroundBarcos})` }} className="flex flex-col justify-between min-h-[600px] h-screen bg-center bg-cover relative">
                    <div id="slider_barcos" className="h-[100%] flex items-center pt-[60px] md:pt-0">

                        <div className="w-full lg:w-[1020px] mx-auto px-7 xs:px-10 xl:px-20">
                            <Swiper navigation={true} onSlideChange={swiperCore => setBarcoActive(swiperCore.realIndex)} modules={[Navigation, Pagination, EffectFade]} speed={980} pagination={{ clickable: true }} loop={true} className="mySwiper h-fit">


                                {data.map((e, index) => {

                                    
                                    return (
                                        <SwiperSlide key={e._id} className="swiperSlide flex flex-col">

                                            <div className='flex h-80  justify-center items-center'>
                                                <Icone id={`loadingBarco${index}`} tipo='loading' viewbox='0 0 100 100' className='animate-spin w-10 h-10' />

                                                {dataFotos.map(i => {
                                                    if (i[0].name.slice(0, -4) === e.nome) {
                                                        
                                                        return (
                                                            <img key={e.nome} className="w-64 xl:w-80 hidden" onLoad={e => { (e.currentTarget.classList.remove('hidden')), (document.getElementById(`loadingBarco${index}`).style.display = 'none') }} src={i[0].webContentLink} />
                                                        )
                                                    }
                                                })}
                                            </div>


                                            <div className="hidden md:block">
                                                <h1 className="font-unbounded text-branco text-[70px] font-semibold">{e.nome}</h1>
                                                <p className="text-branco mb-4 md:w-[420px] mx-auto">{e.descricao}</p>
                                                <a href="#detalhesBarcos"><Botao1 cor='branco'>Ver características</Botao1></a>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </div>

                    <div className="bg-branco text-center py-6 rounded-tl-3xl rounded-tr-3xl flex items-center flex-col justify-center md:hidden z-10">
                        <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-2 text-azul1">{data[barcoActive].nome}</h1>
                        <p className="text-cinzento3 px-2 max-w-[300px]">{data[barcoActive].descricao}</p>
                    </div>

                    <img loading='lazy'  className="hidden xl:block h-screen left-20 absolute" src={curvasEfeito}></img>
                    <img loading='lazy'  className="hidden xl:block h-screen right-20 rotate-180 absolute" src={curvasEfeito}></img>

                    <div className="bg-gradient-to-t from-azul2 mt-[20vh] absolute bottom-0 inset-0"></div>

                </div>

                <ConteudoBarcos data={data} active={barcoActive} />

            </div>

        );
    }else if(error){
        return(<div className='text-center bg-azul2 flex justify-center items-center text-branco mx-auto flex-col h-screen'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-branco' /><p className=" max-w-[210px] sm:max-w-none">Algo de errado se passou do nosso lado.</p></div>)
    }else{
        return(
            <div className='h-screen'></div>
        )
    }


}