import Convite from "../componentes/convites/convite";
import CategoriasDuvidas from "../componentes/duvidas/categoriasDuvidas";
import FormulárioEmail from "../componentes/formulários/formulário_email";
import { useState, useEffect } from "react";
import QuestoesDuvidas from "../componentes/duvidas/questoesDuvidas";
import Axios from "axios";
import Icone from "../componentes/ícones/display_icones";
import Header from "../componentes/headers/header";
import backgroundHeader from '../assets/imagens/backgrounds/backgroundDuvidas.webp'


export default function Duvidas() {

    const [categoria, setCategoria] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    function selecionarCategoria(catg){
        setCategoria(catg)
    }

    
    useEffect(() => {
       
        window.scrollTo(0, 0);
        Axios.get(`${import.meta.env.VITE_SERVER}/getDuvidas`)
            .then(response => {
                setData(response.data)
            }
            )
            .catch(error => {
                setError(true)
                console.log(error)
            })
    }, [])

    return (
        <div >
            <Header titulo='Dúvidas' texto='Estes são os eventos que se irão realizar. Inscreve-te!' imagem={backgroundHeader} />
            {!categoria ? <CategoriasDuvidas categoria={categoria} selecionarCategoria={selecionarCategoria} /> : categoria && data ?  <QuestoesDuvidas data={data} categoria={categoria} selecionarCategoria={selecionarCategoria} /> : error ? <div className='text-center flex justify-center items-center text-cinzento3 flex-col h-[50vh]'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-cinzento3' />Ocorreu um erro da nossa parte.</div> : '' }
            

            <hr className="border-b border-cinzento2 sm:hidden" />
            <div className="my-10">
            <Convite />
            </div>
            <div className="my-20">
                <FormulárioEmail />
            </div>
        </div>

    )
}