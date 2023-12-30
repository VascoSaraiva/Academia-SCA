import { useState } from "react";
import Icone from "../ícones/display_icones";
import QuestoesDuvidas from "./questoesDuvidas";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CategoriasDuvidas({categoria, selecionarCategoria}) {

    useEffect(() => {
        AOS.init()
    }, [])


    if(!categoria){
        return (
            <div data-aos="fade-up" data-aos-delay="500"  className="container sm:px-0 sm:w-[570px] my-20 text-center">

                <p className="mb-8 text-cinzento3">Como podemos ajudar?</p>


                <div className="grid grid-cols-2 sm:grid-cols-4">

                    <div onClick={e => selecionarCategoria('Academia')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] mr-1.5 my-1.5 ml-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-1 flex justify-center items-end">
                            <Icone tipo='instalações' viewbox='0 0 100 74' className='w-9 h-9 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Academia</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Loja Online')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] ml-1.5 my-1.5 mr-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-2 flex justify-center items-end">
                            <Icone tipo='carrinho_compras' viewbox='0 0 100 100' className='w-8 h-8 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Loja Online</p>
                    </div>

                    <div onClick={e => selecionarCategoria('Regatas')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] mr-1.5 my-1.5 ml-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] flex justify-center items-end">
                            <Icone tipo='medalha' viewbox='0 0 75 100' className='w-10 h-10 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Regatas</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Aulas')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] ml-1.5 my-1.5 mr-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-2 flex justify-center items-end">
                            <Icone tipo='lista' viewbox='0 0 100 100' className='w-8 h-8 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Aulas</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Barcos')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] mr-1.5 my-1.5 ml-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-1 flex justify-center items-end">
                            <Icone tipo='barco' viewbox='0 0 89 100' className='w-9 h-9 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Barcos</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Atividades')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] ml-1.5 my-1.5 mr-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-1.5 flex justify-center items-end">
                            <Icone tipo='calendário_estrela' viewbox='0 0 86 100' className='w-9 h-9 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Atividades</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Saúde')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] mr-1.5 my-1.5 ml-auto sm:mx-auto sm:my-1.5">
                        <div className="h-[75px] mb-1 flex justify-center items-end">
                            <Icone tipo='corações' viewbox='0 0 100 92' className='w-9 h-9 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Saúde</p>
                    </div>


                    <div onClick={e => selecionarCategoria('Voluntariado')} className="bg-cinzento1 cursor-pointer transition-shadow duration-300 hover:shadow-inner flex flex-col justify-center items-center w-[130px] rounded-xl h-[130px] ml-1.5 my-1.5 mr-auto sm:mx-auto sm:my-1.5">


                        <div className="h-[75px] mb-2 flex justify-center items-end">
                            <Icone tipo='planeta' viewbox='0 0 100 100' className='w-8 h-8 fill-preto' />
                        </div>
                        <p className="text-center h-[55px] flex justify-center items-center mb-3 px-2">Voluntariado</p>
                    </div>


                </div>

            </div>
        )
    }
        
    

}