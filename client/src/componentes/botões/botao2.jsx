import React from "react";
import Icone from "../ícones/display_icones";


export default function Botao2(props) {

    switch (props.cor) {

        case "preto":
                return (
                    <button onClick={props.onClick} className={`bg-opacity-0 flex justify-center items-center font-semibold text-preto text-center rounded-full border-preto border px-9 py-3 hover:text-branco hover:bg-preto transition delay-120 duration-500 ease-in-out text-botao2_pequeno lg:text-botao2_grande my-3 md:text-botao1_texder-3 ${props.className}`}>{props.children}</button>
                )
        case "branco":
            return (
                <button onClick={props.onClick} className={`bg-opacity-0 font-semibold text-branco text-center rounded-full border-branco border px-9 py-3 hover:text-preto hover:bg-branco transition delay-120 duration-500 ease-in-out text-botao2_pequeno lg:text-botao2_grande my-3 md:border-3 md:text-botao2_pequeno md:border-3 ${props.className}`}>{props.children}</button>
            )
        default:
            return (
                <button onClick={props.onClick} className={`bg-opacity-0 flex justify-center items-center font-semibold text-preto text-center rounded-full border-preto border px-9 py-3 hover:text-branco hover:bg-preto transition delay-120 duration-500 ease-in-out text-botao2_pequeno lg:text-botao2_grande my-3 md:text-botao1_texder-3 ${props.className}`}>{props.children}</button>
            )
           
    }







}