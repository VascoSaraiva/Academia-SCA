
import { useEffect } from "react";
import SliderBarcos from "../componentes/sliders/slider_barcos";


export default function Barcos(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="md:bg-azul2">
        <SliderBarcos />
        </div>
    )
}