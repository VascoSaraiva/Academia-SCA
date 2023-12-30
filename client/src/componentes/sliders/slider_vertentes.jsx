
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper";
import CardVertentes from '../cards/card_vertentes';
import CardCompetição from '../../assets/imagens/cards_vertentes/card_competição.webp'
import CardAprendizagem from '../../assets/imagens/cards_vertentes/card_aprendizagem.webp'
import CardLazer from '../../assets/imagens/cards_vertentes/card_lazer.webp'
import { useEffect } from "react";





export default function SliderVertentes(props) {

    let windowSize = props.windowResize()

    let vertentes = [
        {
            titulo: 'Competição',
            texto: 'Esta vertente desafia as habilidades, estratégias e resistência física, mediante as condições atmosféricas.',
            cor: '1293E2',
            icone: 'medalha',
            imagemSrc: CardCompetição,
        },
        {
            titulo: 'Aprendizagem',
            texto: 'Aqui aprenderás com instrutores que te ajudarão a desenvolver as aptidões necessárias para a esta modalidade.',
            cor: 'F07246',
            icone: 'chapéu_licenciatura',
            imagemSrc: CardAprendizagem,
        },
        {
            titulo: 'Lazer',
            texto: 'Uma experiência relaxante, permitindo que os entusiastas da vela desfrutem do mar enquanto navegam ao sabor do vento.',
            cor: 'AA30AC',
            icone: 'smile',
            imagemSrc: CardLazer,
        },

    ]
  

    if (windowSize.width < 1024) {
        return (
            <div id="slider_vertentes">
                <Swiper initialSlide={1} slidesPerView={"auto"} centeredSlides={true} spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">
                    {vertentes.map(vertente => <SwiperSlide key={vertente.titulo}><CardVertentes  {...vertente}/></SwiperSlide>)}
                </Swiper>
            </div>
        )
    } else {
        return (
            <div className='flex justify-center items-center'>
                {vertentes.map(vertente => <CardVertentes key={vertente.titulo} {...vertente} />)}

            </div>
        )
    }



}