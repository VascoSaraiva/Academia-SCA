import MeteorologiaHeader from "../componentes/headers/meteorologia_header";
import Meteorologia from "../componentes/meteorologia/meteorologia";
import { useEffect } from "react";

export default function Meteorologia_pag() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

return(
    <div>
    <MeteorologiaHeader/>
    <Meteorologia/>
    </div>
)
}