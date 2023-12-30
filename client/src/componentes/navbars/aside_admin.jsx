import Icone from "../ícones/display_icones.jsx";
import logo2 from "../../assets/imagens/logo_branco_simples.png"
import React, { useState, useEffect } from 'react';


export default function Aside_admin (){
  
  

    return(
        <ul className="text-preto text-[13px] md:text-[16px]  lg:text-[18px]">
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="velocímetro" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Dashboard</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Eventos</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Loja</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Aprender+</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Testemunhos</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Barcos</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Equipa</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Dúvidas</div></div>
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="text-branco hover:text-cinzento1">
              <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo="utilizador" fill="#fff" viewbox="0 0 100 100" className="h-3 w-3 start-0"/></div><div>Contactos</div></div>
              </a>
            </li>
          </ul>
    )
}
 