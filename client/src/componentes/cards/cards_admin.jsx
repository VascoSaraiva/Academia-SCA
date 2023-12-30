import React, { useEffect } from "react"
import Icone from "../ícones/display_icones.jsx";
import axios from "axios";
import { useState } from "react";

export default function Cards_admin({atualizarCategoria}) {

  const [elementos, setElementos] = useState([])

  useEffect(() => {

    let endpoints = [
      `${import.meta.env.VITE_SERVER}/getAprender`,
      `${import.meta.env.VITE_SERVER}/getBarcos`,
      `${import.meta.env.VITE_SERVER}/getEventos`,
      `${import.meta.env.VITE_SERVER}/getArtigos`,
      `${import.meta.env.VITE_SERVER}/getTestemunhos`,
      `${import.meta.env.VITE_SERVER}/getMembros`,
      `${import.meta.env.VITE_SERVER}/getDuvidas`,
      `${import.meta.env.VITE_SERVER}/getContactos`,
    ];

    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(data => {
        data.map(collection => {
          let categoria;
          switch (collection.config.url) {
            case `${import.meta.env.VITE_SERVER}/getAprender`:
              categoria = 'Aprender'
              break;
            case `${import.meta.env.VITE_SERVER}/getBarcos`:
              categoria = 'Barcos'
              break;
            case `${import.meta.env.VITE_SERVER}/getEventos`:
              categoria = 'Eventos'
              break;
            case `${import.meta.env.VITE_SERVER}/getArtigos`:
              categoria = 'Loja'
              break;
            case `${import.meta.env.VITE_SERVER}/getTestemunhos`:
              categoria = 'Testemunhos'
              break;
            case `${import.meta.env.VITE_SERVER}/getMembros`:
              categoria = 'Equipa'
              break;
            case `${import.meta.env.VITE_SERVER}/getDuvidas`:
              categoria = 'Duvidas'
              break;
            case `${import.meta.env.VITE_SERVER}/getContactos`:
              categoria = 'Contactos'
              break;
          }
          
          setElementos(oldArray => ([...oldArray, { categoria: categoria, dataCount: collection.data.length }]))
        })
      });

  }, [])


  
  return (
    <div>
      <div className='mx-auto mt-8 text-center font-unbounded text-[14px] md:text-[18px] lg:text-titulo_pequeno font-semibold'>Estatisticas:</div>
      <div className="p-6 mx-auto lg:mx-1 lg:columns-2 xl:columns-3 overflow-hidden mt-4 lg:mt-10">

      {elementos ? elementos.map(elemento => {

        switch(elemento.categoria){
          case "Eventos":
            return(
              <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
              <div className="flex justify-between items-center">
                <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="calendário_estrela" viewbox="0 0 86 100" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                <div className='flex text-[12px] text-center mx-auto'>
                  <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                  <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                </div>
              </div>
            </div>
            )
            break;
            case "Barcos":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="barco" viewbox="0 0 89 100" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Testemunhos":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="lista" viewbox="0 0 100 100" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Equipa":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="par_pessoas" viewbox="0 0 100 74" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Aprender":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="chapéu_licenciatura" viewbox="0 0 100 85" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Contactos":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="telefone" viewbox="0 0 100 100" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Loja":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="carrinho_compras" viewbox="0 0 100 100" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
            case "Duvidas":
              return(
                <div onClick={() => atualizarCategoria(elemento.categoria)} className="cursor-pointer flex justify-between rounded-xl bg-cinzento1 shadow-xl w-[200px] md:w-[400px] lg:w-[320px] mx-auto mb-7 hover:bg-cinzento3 hover:bg-opacity-30 delay-120 duration-500 ease-in-out ">
                <div className="flex justify-between items-center">
                  <div className='bg-verde p-4 md:p-6 rounded-l-xl'><Icone tipo="duvidas" viewbox="0 0 109 109" className=" h-4 w-4 lg:h-7 lg:w-7 items-center" fill="#fff" /></div>
                  <div className='flex text-[12px] text-center mx-auto'>
                    <h5 className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-7 text-center mx-auto">{elemento.categoria}:</h5>
                    <div className="font-unbounded md:text-subtitulo_pequeno ml-2 md:ml-2.5 text-center mx-auto">{elemento.dataCount}</div>
                  </div>
                </div>
              </div>
              )
            break;
        }

       
      }) : ''}
        



      </div>
    </div>
  )
}