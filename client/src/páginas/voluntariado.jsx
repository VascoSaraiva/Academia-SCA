import CardEventos from "../componentes/cards/card_eventos"
import Axios from 'axios'
import { useState, useEffect } from "react"
import backgroundHeader from '../assets/imagens/backgrounds/backgroundVoluntariado.webp'
import Icone from "../componentes/ícones/display_icones"
import Header from "../componentes/headers/header"

export default function Voluntariado() {

    let [data, setData] = useState(null)
    let [dataFotos, setDataFotos] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);

        Axios.get(`${import.meta.env.VITE_SERVER}/getEventos`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(true)
                console.error(error)
            });
        Axios.get(`${import.meta.env.VITE_SERVER}/getFotosEventos`)
            .then(response => {
                setDataFotos(response.data);
            })
            .catch(error => {
                setError(true)
                console.error(error)
            });
    }, [])



    return (
        <div>
            <Header titulo='Voluntariado' texto='Eventos de voluntariado que se irão realizar brevemente.' imagem={backgroundHeader} />
            {data && dataFotos ? <div className='flex flex-wrap justify-center min-h-screen max-w-[1500px] mx-auto'>
                {data.map(e => {
                    if (e.tematica === 'Voluntariado') {
                        const objImagem = dataFotos.find(obj => obj.name.slice(0, -4) === e.titulo)
                        if (objImagem) {
                            return (
                                <CardEventos key={e._id} {...e} imagem={objImagem.webContentLink} />
                            )
                        } else {
                            const eventoPadrao = dataFotos.find(obj => obj.name.slice(0, -4) === 'Evento_voluntariado')
                            return (
                                <CardEventos key={e._id} {...e} imagem={eventoPadrao.webContentLink} />
                            )
                        }
                    }


                })}
            </div> : error ? <div className='text-center flex justify-center items-center text-cinzento3 max-w-[250px] sm:max-w-none mx-auto flex-col h-[50vh]'><Icone tipo='triste' viewbox='0 0 100 100' className='h-10 w-10 mb-3 fill-cinzento3' />Não existem eventos de voluntariado a decorrer.</div> : <div className='h-screen'></div>}

        </div>
    )


}