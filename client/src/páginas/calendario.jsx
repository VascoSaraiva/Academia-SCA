import Calendario from "../componentes/calendario/calendario";
import { useEffect } from "react";
import Header from "../componentes/headers/header";
import backgroundHeader from '../assets/imagens/backgrounds/backgroundCalendário.webp'



export default function Calendario_pag() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header titulo='Calendário' texto='Consulta os eventos da Academia de Vela no calendário.' imagem={backgroundHeader} />
            <Calendario />
        </div>

    )
}