import { useEffect } from "react";
import VertentesHeader from "../componentes/headers/vertentes_header";
import VertentesConteudo from "../componentes/outros/vertentesConteudo";



export default function Vertentes(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    

    return(
        <div>
            <VertentesHeader />
            <div className="mb-48">
            <VertentesConteudo vertente={'Competição'} />
            <VertentesConteudo vertente={'Aprendizagem'} />
            <VertentesConteudo vertente={'Lazer'} />
            </div>
        </div>
        
    )
}