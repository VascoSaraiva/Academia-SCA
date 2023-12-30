import Icone from '../componentes/ícones/display_icones'
import SliderVertentes from '../componentes/sliders/slider_vertentes'
import Testemunhos from '../componentes/testemunhos/testemunhos'
import Trailer from '../componentes/trailer/trailer'
import SliderAulas from '../componentes/sliders/slider_aulas'
import HomeHeader from '../componentes/headers/home_header'
import Missao from '../componentes/outros/missao'
import FaqsHome from '../componentes/faqs/faqs_home'
import EventosHome from '../componentes/outros/eventos_home'
import background from "../assets/imagens/backgrounds/background1.webp"
import { useEffect } from 'react'
import Convite from '../componentes/convites/convite'
import InstagramFeed from '../componentes/outros/instagram_feed'


export default function Home(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

        
        return (
            <div className='overflow-x-hidden'>
                <HomeHeader />
                <Missao />
                <div style={{ backgroundImage: `url('${background}')` }} className='bg-cover' >
    
                    <div className='mt-16 mb-24 md:mb-48'>
                        <Trailer />
                    </div>
    
                    <div className='mb-48'>
                        <SliderVertentes windowResize={props.windowResize} />
                    </div>
    
                </div>
    
                <div className='mb-48'>
                    <Testemunhos />
                </div>
    
                <div className='mb-48'>
                    <SliderAulas />
                </div>
    
                {props.dataEventos ? <div style={{ backgroundImage: `url('${background}')` }} className='bg-cover bg-center' >
                <EventosHome data={props.dataEventos} />
                </div> : ''}
                
                <div className='mb-48'>
                <InstagramFeed windowResize={props.windowResize} />
                </div>
    
                <div className='mb-48'>
                    <FaqsHome />
                </div>
    
    
            </div>
    
        )
    
    }
    
    