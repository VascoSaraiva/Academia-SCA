import Convite from "../componentes/convites/convite";
import SobreNosHeader from "../componentes/headers/sobre_nos_header";
import AtualmenteSobreNos from "../componentes/sobre_nós/atualmente";
import HistoriaSobreNos from "../componentes/sobre_nós/história";
import Timeline from "../componentes/sobre_nós/timeline";
import SliderEquipa from "../componentes/sliders/slider_equipa";
import { useEffect } from "react";
import Instalações from "../componentes/sobre_nós/instalações";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SobreNos(props) {

    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <SobreNosHeader />
            <div className="bg-azul2">
                <HistoriaSobreNos />
                <Timeline />
                <div className="bg-cinzento1">
                    <Convite />
                </div>
            </div>
            <AtualmenteSobreNos />
            <SliderEquipa windowResize={props.windowResize} />
            <div className="bg-azul2">
                <div className="bg-cinzento1">
                    <Convite tipo='Dúvidas' />
                </div>
                <div>
                    
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" >
                <div className="text-center mx-auto font-unbounded font-semibold text-titulo_grande my-16">Fotos das instalações</div>
                <Instalações/>
            </div>

        </div>

    )
}