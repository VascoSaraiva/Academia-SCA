import Botao2 from "../botões/botao2";
import { Fragment, useEffect, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Icone from "../ícones/display_icones";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function QuestoesDuvidas({ categoria, selecionarCategoria, data }) {

    const [open, setOpen] = useState(0);
    const [iconeCategoria, setIconeCategoria] = useState('');
    const [questoes, setQuestoes] = useState([])

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        AOS.init()
        switch (categoria) {
            case 'Academia':
                setIconeCategoria(<Icone tipo='instalações' viewbox='0 0 100 74' className='w-6 h-6 mx-2 fill-preto' />)
                break;
            case 'Loja Online':
                setIconeCategoria(<Icone tipo='carrinho_compras' viewbox='0 0 100 100' className='w-6 h-6 mx-2 fill-preto' />)
                break;
            case 'Regatas':
                setIconeCategoria(<Icone tipo='medalha' viewbox='0 0 75 100' className='w-7 h-7 mx-2 fill-preto' />)
                break;
            case 'Aulas':
                setIconeCategoria(<Icone tipo='lista' viewbox='0 0 100 100' className='w-6 h-6 mx-2 fill-preto' />)
                break;
            case 'Barcos':
                setIconeCategoria(<Icone tipo='barco' viewbox='0 0 89 100' className='w-7 h-7 mx-2 fill-preto' />)
                break;
            case 'Atividades':
                setIconeCategoria(<Icone tipo='calendário_estrela' viewbox='0 0 86 100' className='w-6 h-6 mx-2 fill-preto' />)
                break;
            case 'Saúde':
                setIconeCategoria(<Icone tipo='corações' viewbox='0 0 100 92' className='w-6 h-6 mx-2 fill-preto' />)
                break;
            case 'Voluntariado':
                setIconeCategoria(<Icone tipo='planeta' viewbox='0 0 100 100' className='w-6 h-6 mx-2 fill-preto' />)
                break;
        }

        setQuestoes(data.filter(obj => obj['categoria'] === categoria))
    
    }, [categoria])

    
    return (
        <div data-aos="fade-up" data-aos-delay="200" >
            <div className="container sm:px-0 sm:w-[570px] mt-20 mb-5 text-center flex justify-between items-center">
                <Botao2 onClick={e => selecionarCategoria(null)} cor='preto' className='w-1/2 mr-1 xxs:mr-3'>Voltar</Botao2>
                <h1 className="bg-cinzento1 rounded-lg flex justify-center items-center py-3 w-1/2 ml-1 xxs:ml-3">{iconeCategoria}{categoria}</h1>
            </div>

            <div id="questoesDuvidas" className='container sm:px-0 sm:max-w-[570px] mb-20'>
                <Fragment>
                    {questoes != [] ?

                        questoes.map((element, index) => {
                            return (
                                <Accordion key={element.questao} open={open === index + 1}>
                                    <AccordionHeader onClick={() => handleOpen(index + 1)}>
                                        <p className='text-cinzento3 my-5'>{element.questao}</p>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <p className='pt-4 pb-4'>{element.resposta}</p>
                                    </AccordionBody>
                                </Accordion>
                            )


                        })

                        : ''}
                </Fragment>
            </div>

        </div>

    )
}