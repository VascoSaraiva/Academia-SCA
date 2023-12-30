import Botao1 from "../botões/botao1";
import Titulo from "../títulos/titulo";
import separadorCurva from '../../assets/imagens/separadores/curva.webp'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import CardEventos from "../cards/card_eventos"
import background from "../../assets/imagens/backgrounds/background2.webp"
import {Link} from 'react-router-dom'

export default function EventosHome(props) {

    let [data, setData] = useState(null)
    let [dataFotos, setDataFotos] = useState(null)


    let diaAtual = new Date()

    if(props.data && !data){
        let closestDate = null;
        let closestDifference = Infinity;

        if(props.data.length != 1){
            props.data.map(e => {
                const difference = Math.abs(diaAtual - new Date(e.data));
                if (difference < closestDifference) {
                    closestDate = new Date(e.data);
                    closestDifference = difference;
                }
            })

            if (closestDate) {
                setData(props.data.find(e => e.data === closestDate.toISOString().split('T')[0]))
            }
        }else{
            setData(props.data[0])
        }
    }
        
    
            

    if (data && !dataFotos) {
        Axios.get(`${import.meta.env.VITE_SERVER}/getFotosEventos`)
            .then(response => {

                if(response.data.find(e => e.name.slice(0, -4) === data.titulo)){
                    setDataFotos(response.data.find(e => e.name.slice(0, -4) === data.titulo));
                }else{
                    setDataFotos(response.data.find(e => e.name.slice(0, -4) === 'Evento_voluntariado' || e.name.slice(0, -4) === 'Evento_aprendizagem' || e.name.slice(0, -4) === 'Evento_lazer' || e.name.slice(0, -4) === 'Evento_competição'));
                }   
                 
                
            })
            .catch(error => console.error(error));
    }
  

    if (data && dataFotos) {
        

        return (
            <div className="mb-48">
                <div className="relative flex justify-center flex-col items-center">
                    <Titulo>Próximo Evento</Titulo>

                    <CardEventos key={data._id} {...data} imagem={dataFotos.webContentLink} />


                    <div className="flex justify-center mt-5">
                        <Link to='/eventos'><Botao1 cor='preto'>Ver mais eventos</Botao1></Link>
                    </div>



                </div>
            </div>
        )
    }

}