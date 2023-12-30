import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";



const Instalações = () => {
  const [fotos, setfotos] = useState([]);

  useEffect(() => {
    
    fotosInstalações();
  }, []);

  const fotosInstalações = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/drive/v3/files",
        {
          params: {
            q: "'1r2r6FGJIbOXCePXygccztWWSiKVfqikY' in parents", 
            fields: "files(name, webContentLink, id)",
            key: "AIzaSyBmlvfFFSEakNY9VpYuNs1sFBoh-Wk2qDE", 
          },
        }

      );

      const fotos = response.data.files;
      setfotos(fotos);
      //console.log(fotos);
    } catch (error) {
      console.error(error);
    }
  };

  if(fotos==""){

    return(<div className="font-unbounded text-center mx-auto text-subtitulo_grande mb-24 text-cinzento3">Não há fotos neste momento.</div>)
  }else{

  return (
    <div id="instalaçoes" className="mx-auto text-center w-[320px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] mb-24">
         <Swiper
        slidesPerView={1}
        centeredSlides
        initialSlide={1}
        loop={true}
        breakpoints={{
            
            640: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: 0
            },
            
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
                width: 1024,
                slidesPerView: 3,
                spaceBetween: 20
              },
            1280:{
                width: 1280,
                slidesPerView: 3,
                spaceBetween: 20
            },
                
          }}
        pagination={{
          clickable: true
        }}
        navigation={{clickable: true}}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > 
      {fotos.map((photo) => (
        <SwiperSlide key={photo.id} className="mb-10 lg:px-10">
           
        <div><img className="object-cover w-full " src={photo.webContentLink} alt={photo.name} /></div>
     
      </SwiperSlide> ))}
        
      </Swiper>
      
    </div>
  );
}
}
export default Instalações;
