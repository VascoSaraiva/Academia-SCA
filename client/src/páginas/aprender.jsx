import Axios from 'axios';
import { useState, useEffect } from "react";
import Icone from '../componentes/ícones/display_icones';
import Header from '../componentes/headers/header';
import backgroundHeader from '../assets/imagens/backgrounds/backgroundAprender+.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aprender_mais() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false)

  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0);

    Axios.get(`${import.meta.env.VITE_SERVER}/getAprender`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(true)
        console.error(error)
      });
  }, []);


  return (

    <div>
      
      <Header titulo='Aprender +' texto='Consulte aqui os nossos meios de comunicação.' imagem={backgroundHeader} />

      {data ? <div><div className='mb-10 mt-16 mx-auto px-2 text-center'>

        <div data-aos="fade-up" data-aos-delay="500" className='text-center my-5'>
          <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-4">Aprender</h1>

          <p className="text-cinzento3 sm:w-[25rem] lg:w-[28rem] mx-auto">Clica em "Download" para descarregar o ficheiro pretendido.</p>
        </div>


      </div><div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-7 md:grid-cols-3 mx-auto my-20 xl:w-[1200px]'>
          {data.map(aprender => {

            switch (aprender.categoria) {
              case 'Informativo':
                return (
                  <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col justify-between rounded-xl mx-auto bg-branco border border-cinzento2   w-[300px] sm:w-[280px] md:w-[240px] lg:w-[300px] xl:w-[300px] my-5' key={aprender.titulo}>

                    <div>
                      <div className='bg-amarelo py-10 px-5 lg:py-12 rounded-t-xl '><Icone tipo="informativo" viewbox="0 0 100 100" className="fill-branco h-20 w-20 text-center mx-auto self-center items-center" /></div>
                      <div className='mx-4 flex flex-col justify-between items-start'>
                        <div className='font-unbounded text-subtitulo_pequeno mt-3'>{aprender.titulo}</div>
                        <div className='text-cinzento3 text-[16px] '>{aprender.categoria}</div>
                      </div>
                    </div>

                    <div className='text-verde hover:border-verde border-b-branco border-b-2 transition duration-300 w-fit text-[16px] font-semibold m-4'><a href={aprender.link} target='_blank'>Download</a></div>
                  </div>
                )
              case 'Lúdico':
                return (
                  <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col justify-between rounded-xl mx-auto bg-branco border border-cinzento2  w-[300px] sm:w-[280px] md:w-[240px] lg:w-[300px] my-5 xl:w-[300px]' key={aprender.titulo}>

                    <div>
                      <div className='bg-verde py-10 px-5  lg:py-12 rounded-t-xl '><Icone tipo="ludico" viewbox="0 0 100 60" className="fill-branco h-20 w-20 text-center mx-auto self-center items-center" /></div>
                      <div className='mx-4'>
                        <div className='font-unbounded text-subtitulo_pequeno mt-3'>{aprender.titulo}</div>
                        <div className='text-cinzento3 text-[16px] '>{aprender.categoria}</div>
                      </div>
                    </div>

                    <div className='text-verde hover:border-verde border-b-branco border-b-2 transition duration-300 w-fit text-[16px] font-semibold m-4'><a href={aprender.link} target='_blank'>Download</a></div>
                  </div>


                )
              case 'Educativo':
                return (
                  <div data-aos="fade-up" data-aos-delay="300"  className='flex flex-col justify-between rounded-xl mx-auto bg-branco border border-cinzento2  w-[300px] sm:w-[280px] md:w-[240px] lg:w-[300px] my-5 xl:w-[300px]' key={aprender.titulo}>

                    <div>
                      <div className='bg-eventos_laranja py-10 px-5 lg:py-12 rounded-t-xl '><Icone tipo="chapéu_licenciatura" viewbox="0 0 100 85" className="fill-branco h-20 w-20 text-center mx-auto self-center items-center" /></div>
                      <div className='mx-4'>
                        <div className='font-unbounded text-subtitulo_pequeno mt-3'>{aprender.titulo}</div>
                        <div className='text-cinzento3 text-[16px]'>{aprender.categoria}</div>
                      </div>
                    </div>

                    <div className='text-verde hover:border-verde border-b-branco border-b-2 transition duration-300 w-fit text-[16px] font-semibold m-4'><a href={aprender.link} target='_blank'>Download</a></div>
                  </div>

                )
              case 'Técnico':
                return (
                  <div data-aos="fade-up" data-aos-delay="300"  className='flex-col justify-between rounded-xl mx-auto bg-branco border border-cinzento2  w-[300px] sm:w-[280px] md:w-[240px] lg:w-[300px] my-5 xl:w-[300px]' key={aprender.titulo}>

                    <div>
                      <div className='bg-eventos_azul py-10 px-5  lg:py-12 rounded-t-xl '><Icone tipo="tecnico" viewbox="0 0 90 60" className="fill-branco pl-1 h-20 w-20 text-center mx-auto self-center items-center" /></div>
                      <div className='mx-4'>
                        <div className='font-unbounded text-subtitulo_pequeno mt-3'>{aprender.titulo}</div>
                        <div className='text-cinzento3 text-[16px] '>{aprender.categoria}</div>
                      </div>
                    </div>


                    <div className='text-verde hover:border-verde border-b-branco border-b-2 transition duration-300 w-fit text-[16px] font-semibold m-4'><a href={aprender.link} target='_blank'>Download</a></div>
                  </div>
                )
              default:
                return (
                  <div data-aos="fade-up" data-aos-delay="300"  className='flex-col justify-between rounded-xl mx-auto bg-branco border border-cinzento2  w-[300px] sm:w-[280px] md:w-[240px] lg:w-[300px] my-5 xl:w-[300px]' key={aprender.titulo}>

                    <div>
                      <div className='bg-cinzento3 py-10 px-5  lg:py-12 rounded-t-xl '><Icone tipo="cruz" viewbox="0 0 100 100" className="fill-branco pl-1 h-20 w-20 text-center mx-auto self-center items-center" /></div>
                      <div className='mx-4'>
                        <div className='font-unbounded text-subtitulo_pequeno mt-3'>{aprender.titulo}</div>
                        <div className='text-cinzento3 text-[16px] '>{aprender.categoria}</div>
                      </div>
                    </div>


                    <div className='text-verde hover:border-verde border-b-branco border-b-2 transition duration-300 w-fit text-[16px] font-semibold m-4'><a href={aprender.link} target='_blank'>Download</a></div>
                  </div>
                )
            }



          })}
        </div></div> : error ? <div className='text-center flex justify-center items-center text-cinzento3 flex-col h-[50vh]'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-cinzento3' />Não existem conteúdos disponíveis.</div> : <div className='h-screen'></div>}

    </div>
  );


  return null;
}