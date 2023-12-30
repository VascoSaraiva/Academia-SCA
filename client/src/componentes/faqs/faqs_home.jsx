import { Fragment, useEffect, useState } from "react";
import Titulo from '../títulos/titulo';
import Axios from 'axios'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Botao1 from "../botões/botao1";
import { Link } from "react-router-dom";

export default function FaqsHome() {
    const [open, setOpen] = useState('');
    const [data, setData] = useState(null);

    const handleOpen = (value) => {
        setOpen(open === value ? '' : value);
    };



    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_SERVER}/getDuvidas`)
            .then(response => {
                setData(response.data)
            }
            )
            .catch(error => console.log(error))
    }, [])

    if (data) {
        return (
            <div className='flex flex-col justify-center items-center md:border w-fit mx-auto md:border-cinzento2 md:rounded-xl'>
                <div className='text-center my-10'>
                    <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-4">FAQ's</h1>


                    <p className="text-cinzento3 sm:w-[25rem] lg:w-[28rem] container mx-auto">Alguma dúvida por esclarecer? Estamos aqui para te ajudar.</p>
                </div>

                <div id='faqsHome' className='container max-w-[750px] mb-10'>
                    <Fragment>

                        {data.map((e, index) => {
                            if (e.destacar) {

                                return (
                                    <Accordion key={e._id} open={open === index}>
                                        <AccordionHeader onClick={() => handleOpen(index)}>
                                            <p className='text-cinzento3'>{e.questao}</p>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <p className='pt-4 pb-4'>{e.resposta}</p>
                                        </AccordionBody>
                                    </Accordion>
                                )

                            }
                        })}

                    </Fragment>
                </div>

                <Link to='/duvidas' className="mb-7 block">
                    <Botao1>Ver mais questões</Botao1>
                </Link>

            </div>


        )
    }

}