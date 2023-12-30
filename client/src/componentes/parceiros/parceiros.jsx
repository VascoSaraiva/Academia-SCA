import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ua from "../../assets/imagens/parceiros/ua.png";
import aauav from "../../assets/imagens/parceiros/aauav.png";
import cmaveiro from "../../assets/imagens/parceiros/cmaveiro.png";
import portodeaveiro from "../../assets/imagens/parceiros/portodeaveiro.png";


import { Pagination } from "swiper";

export default function Parceiros() {
  return (
    <div>
      <Swiper pagination={true} loop={true} initialSlide={0} slidesPerView={2} modules={[Pagination]} id="parceiros" className="parceiros self-center items-center object-cover" breakpoints={{
    768: {
      width: 768,
      slidesPerView: 3,
    },
    1024:{
        width: 1024,
        slidesPerView: 4,
        
    }
  }}>
        <SwiperSlide><img loading='lazy'  src={ua} className="h-[60px] w-auto "/></SwiperSlide>
        <SwiperSlide ><img loading='lazy'  src={aauav} className="h-[60px] w-auto "/></SwiperSlide>
        <SwiperSlide ><img loading='lazy'  src={cmaveiro} className="h-[60px] w-auto "/></SwiperSlide>
        <SwiperSlide ><img loading='lazy'  src={portodeaveiro} className="h-[60px] w-auto "/></SwiperSlide>
    
      </Swiper>
    </div>
  );
}
