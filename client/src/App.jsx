import Navbar1 from './componentes/navbars/navbar1'
import Barcos from './páginas/barcos'
import Eventos from './páginas/eventos'
import Home from './páginas/home'
import Galeria from './páginas/galeria'
import { useState, useEffect } from 'react'
import Duvidas from './páginas/duvidas'
import SobreNos from './páginas/sobreNos'
import Contactos from './páginas/contactos'
import Aprender_mais from './páginas/aprender'
import Meteorologia_pag from './páginas/meteorologia'
import Admin from './páginas/admin'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Calendario_pag from './páginas/calendario'
import Voluntariado from './páginas/voluntariado'
import Loja from './páginas/loja';
import Axios from 'axios'
import Footer from './componentes/footer/footer'
import Beneficios from './páginas/beneficios'
import Vertentes from './páginas/vertentes'
import Messenger from './componentes/messenger_plugin/messenger'
import Erro404 from './páginas/erro404';
import Instalações from './componentes/sobre_nós/instalações'


function App() {

  const [dataEventos, setDataEventos] = useState(null)

  useEffect(() => {

  
    Axios.get(`${import.meta.env.VITE_SERVER}/getEventos`)
      .then(res => {
        let dataEventos = res.data
        let diaAtual = new Date();
        let eventosPassados = []

        async function apagarEventos() {
          await Promise.all(dataEventos.map(evento => {
            const diaEvento = new Date(evento.data)
            const diferençaTempo = diaEvento.getTime() - diaAtual.getTime()
            const diferençaDias = Math.ceil(diferençaTempo / (1000 * 60 * 60 * 24));
            if (diferençaDias <= -1) {
              eventosPassados.push(evento._id)
            }
          }))

          if (eventosPassados.length != 0) {
            Axios.post(`${import.meta.env.VITE_SERVER}/deleteEventos?${eventosPassados.map(data => `data=${encodeURIComponent(data)}`).join('&')}`)
            .then(() => {
              Axios.get(`${import.meta.env.VITE_SERVER}/getEventos`)
              .then(
                res2 => setDataEventos(res2.data)
              )
            })
          }else{  
            setDataEventos(res.data)
          }
        }
        apagarEventos()
      })
      .catch(err => console.log(err))

  }, [])


  const useScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollTop(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return scrollTop;
  };


  const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowSize;
  };


  return (


    <BrowserRouter>
      <Navbar1 scroll={useScrollTop} />
      <Routes>
        <Route exact path='/' element={<Home windowResize={useWindowResize} dataEventos={dataEventos} />} />
        <Route exact path='/home' element={<Home windowResize={useWindowResize} dataEventos={dataEventos} />} />
        <Route exact path='/galeria' element={<Galeria scroll={useScrollTop} />} />
        <Route exact path='/barcos' element={<Barcos />} />
        <Route exact path='/eventos' element={<Eventos />} />
        <Route exact path='/voluntariado' element={<Voluntariado />} />
        <Route exact path='/vertentes' element={<Vertentes />} />
        <Route exact path='/duvidas' element={<Duvidas />} />
        <Route exact path='/sobreNos' element={<SobreNos windowResize={useWindowResize} />} />
        <Route exact path='/contactos' element={<Contactos />} />
        <Route exact path='/meteorologia' element={<Meteorologia_pag />} />
        <Route exact path='/aprender' element={<Aprender_mais />} />
        <Route exact path='/calendario' element={<Calendario_pag />} />
        <Route exact path='/loja' element={<Loja windowResize={useWindowResize} />} />
        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='/beneficios' element={<Beneficios/>}/>
        <Route path='*' element={<Erro404/>} />
        
      </Routes>
      {/* <Messenger /> */}
      <Footer scroll={useWindowResize} />
    </BrowserRouter>



  )


}

export default App
