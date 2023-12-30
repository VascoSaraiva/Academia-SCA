import React from "react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Card_loja(props) {

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(null)
  let windowSize = props.windowResize()

  const handleOpen = () => {
    setOpen(!open);
  };



  if (props) {

  
    useEffect(() => {
      if (document.getElementById('detalhes' + props.nome)) {
        setHeight(document.getElementById('detalhes' + props.nome).offsetHeight + 'px')
      }
    }, [])

    if (windowSize.width > 768) {

      return (
        <div>
          <div className="p-3 mx-auto w-[750px]">
            <div className="flex flex-col md:flex-row rounded border border-cinzento2 bg-[#D9D9D9]">

              <Swiper
                direction={'horizontal'}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={'auto'}
                autoplay={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper min-w-[300px] w-[300px] my-auto relative" style={{ height: height }} id="imagensLojaPc">
                <div>
                  {props.fotos.map(url => <SwiperSlide key={url} className="flex items-center justify-center" >
                    <img loading='lazy'  alt={`artigo da loja ${props.nome}`} style={{ alignSelf: 'center' }} className="my-auto" src={url} />
                  </SwiperSlide>)}
                </div>


              </Swiper>

              <div id={'detalhes' + props.nome} className="md:bg-branco rounded-b md:w-full md:rounded-b-none md:rounded-r md:p-0 flex min-h-[370px] flex-col justify-between leading-normal">

                <div className="mx-6 mt-5">
                  <div className="text-preto text-[25px] mb-2 font-unbounded font-semibold text-center md:text-left">
                    {props.nome}
                    <p className="text-verde font-unbounded text-[20px] font-medium mt-1 text-center md:text-left">{props.preço}€</p>
                  </div>

                  <hr className="border-b-1 my-5 border-cinzento2" />

                  <div className="hidden md:block">

                    {props.tamanhos.length != 0 ?

                      <div className="my-4">
                        <div className="mb-1.5 font-unbounded font-medium">Tamanhos</div>
                        <div className="flex text-[12px]">
                          {props.tamanhos.map(tamanho => <div key={tamanho} className="text-cinzento3 mr-5 mb-2">{tamanho}</div>)}
                        </div>
                      </div> : ''}


                    <div className="my-4">
                      <div className="mb-1.5 font-unbounded font-medium">Materiais</div>
                      <div className="flex text-[12px] text-cinzento3">{props.materiais}</div>
                    </div>


                  </div>
                </div>




                <a target="target_blank" href={props.URL} className="bg-verde block hover:bg-verde_escuro text-center cursor-pointer py-3 text-branco font-unbounded font-medium mt-5">Fazer pedido</a>



              </div>


            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div className="flex flex-col my-20 border w-fit mx-auto border-cinzento2">
          <div className="px-5 bg-[#D9D9D9]">
            <div id="imagensLojaMobile" className="w-[300px] h-[350px] mx-auto ">
              <Swiper direction={"horizontal"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper pb-10">

                {props.fotos.map(url => <SwiperSlide key={url}  >
                  <img loading='lazy'  alt={`artigo da loja ${props.nome}`} className="w-[300px] h-[300px]" src={url} />
                </SwiperSlide>)}
              </Swiper>
            </div>
          </div>


          <div className="my-3">
            <div className="font-unbounded mb-1 text-[23px] font-semibold text-center">
              {props.nome}
            </div>
            <div className="text-verde text-[18px] font-unbounded text-center font-semibold">
              {props.preço}€
            </div>
          </div>

          <div className="mx-auto">
            <Accordion open={open}>
              <AccordionHeader onClick={handleOpen} className="w-[300px] caracteristicasMobile py-2 bg-branco border  flex justify-center hover:text-branco hover:bg-preto border-preto focus:bg-preto focus:text-branco active:bg-preto active:text-branco">
                Características
              </AccordionHeader>
              <AccordionBody className="border border-preto">

                <div className="ml-3 my-4">
                  
                  {props.tamanhos.length != 0 ? <div className="my-4">
                    <div className="mb-1 font-unbounded font-medium">Tamanhos</div>
                    <div className="flex text-[12px]">
                      {props.tamanhos.map(tamanho => <div key={tamanho} className="text-cinzento3 md:ml-5 ml-1 mr-2 mb-2">{tamanho}</div>)}
                    </div>
                  </div> : ''}

                  <div className="my-4">
                    <div className=" mb-1 font-unbounded font-medium">Materiais</div>
                    <div className="flex text-[12px] text-cinzento3 mb-3 ml-1">{props.materiais}</div>
                  </div>

                </div>
              </AccordionBody>
            </Accordion>
          </div>


          <a target="target_blank" href={props.URL} className="bg-verde w-full block hover:bg-verde_escuro text-center cursor-pointer py-3 text-branco font-unbounded font-medium mt-7">Fazer pedido</a>

        </div>
      );
    }
  }



}
