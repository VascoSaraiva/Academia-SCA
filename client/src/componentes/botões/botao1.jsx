import React, { useEffect, useState } from "react";


export default function Botao1(props) {

    let [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (props.disabled === true) {
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }, [props])


    switch (props.cor) {
        case "verde":
            return (
                <button onClick={props.onClick} disabled={disabled} className="bg-opacity-0 font-unbounded font-medium text-verde text-center rounded-full border-verde border-2 px-9 py-2.5 hover:text-branco hover:bg-verde transition delay-120 duration-500 ease-in-out text-botao1_pequeno my-5 md:text-botao1_grande md:border-3">{props.children}</button>
            )
        case "preto":
            return (
                <button onClick={props.onClick} disabled={disabled} className="bg-opacity-0 font-medium text-preto text-center rounded-full border-preto border-2 px-9 py-2.5 hover:text-branco hover:bg-preto transition delay-120 duration-500 ease-in-out text-botao1_pequeno font-unbounded my-5 md:text-botao1_grande md:border-3">{props.children}</button>
            )
            break;
        case "branco":
            return (
                <button onClick={props.onClick} disabled={disabled} className="bg-opacity-0 font-medium text-branco text-center rounded-full border-branco border-2 px-9 py-2.5 hover:text-preto hover:bg-branco transition delay-120 duration-500 ease-in-out text-botao1_pequeno font-unbounded my-5 md:text-botao1_grande md:border-3">{props.children}</button>
            )
            break;
        default:
            return (
                <button onClick={props.onClick} disabled={disabled} className="bg-opacity-0 font-medium text-verde text-center rounded-full border-verde border-2 px-9 py-2.5 hover:text-branco hover:bg-verde transition delay-120 duration-500 ease-in-out text-botao1_pequeno font-unbounded my-5 md:text-botao1_grande md:border-3">{props.children}</button>
            )
            break;

    }





}