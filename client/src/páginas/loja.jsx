import { useEffect, useState } from "react";
import Card_loja from "../componentes/cards/card_loja";
import Axios from 'axios'
import Icone from "../componentes/ícones/display_icones";
import AOS from 'aos';
import backgroundHeader from '../assets/imagens/backgrounds/backgroundLoja.webp'
import 'aos/dist/aos.css';
import Header from "../componentes/headers/header";

export default function Loja(props) {

  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [dataFotos, setDataFotos] = useState(null)
  const [openAviso, setOpenAviso] = useState(true)
  

  useEffect(() => {

    AOS.init()

    window.scrollTo(0, 0);

    Axios.get(`${import.meta.env.VITE_SERVER}/getArtigos`)
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })
    Axios.get(`${import.meta.env.VITE_SERVER}/getFotosArtigos`)
      .then(res => {
        setDataFotos(res.data)
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })
  }, [])

  function handleOpen(){
    if(openAviso){
      setOpenAviso(false)
    }else{
      setOpenAviso(true)
    }
  }




  return (
    <div>

      <Header titulo='Loja' texto='Consulte aqui os artigos e merch da Academia.' imagem={backgroundHeader} />


      <div className="my-10">
        {data && dataFotos ? data.map(artigo => {

          let fotos = []

          dataFotos.map(artigoFoto => {
            if (artigoFoto.name.search(artigo.nome) != -1) {
              fotos.push(artigoFoto.webContentLink)
              fotos.sort()
            }
          })

   

          return (
            <Card_loja windowResize={props.windowResize} data-aos="fade-up" data-aos-delay="300" key={artigo.nome} fotos={fotos.length !== 0 ? fotos : fotos=[(dataFotos.find(foto => foto.name === 'Default.png')).webContentLink]} {...artigo} />
          )



        }) : error ? <div className='text-center flex justify-center items-center text-cinzento3 max-w-[250px] sm:max-w-none mx-auto flex-col h-[50vh]'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-cinzento3' />Não existem artigos disponíveis.</div> : <div className='h-screen'></div>}
      </div>



      {openAviso ? <div className="md:h-[250px] w-full flex justify-center items-center fixed left-1/2 z-20 -translate-x-1/2 bottom-0">
        <div className="bg-branco border-amarelo border-t md:border md:mx-0 md:w-[700px] pt-5 pb-5 px-6 shadow-2xl  sm:rounded relative" data-aos="fade-up" data-aos-delay='500'>

          <div data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-start">
            <h1 className="font-bold">Sobre o funcionamento da loja</h1>
            <Icone tipo='cruz' viewbox='0 0 100 100' onClick={handleOpen} className='w-3 h-3 mt-1 fill-cinzento3 cursor-pointer' />

          </div>


          <div className="mr-3">
            <p className="text-cinzento3 text-[15px] mt-2">O pedido de uma peça irá reencaminhá-lo para um formulário onde será emitido um pedido à Academia do artigo em questão. Caso o artigo esteja disponível, deverá fazer o levantamento da mesma nas instalações.</p>
          </div>


          <div>

          </div>





        </div>
      </div> : ''}
      





    </div>
  )
}