import Botao1 from "../botões/botao1"

export default function PosAdicionar_Admin({update}) {
    return (
        <div className="h-screen fixed top-0 left-0 z-30 w-full bg-preto bg-opacity-70 flex justify-center items-center">
            <div className="bg-branco w-[450px] flex justify-center text-center flex-col py-7 rounded px-5">
                <p className="font-semibold text-[22px] my-2">Adicionado com sucesso!</p>
                <div className="text-center mx-auto w-full items-center pt-10">
                    <Botao1><button onClick={update}>X</button></Botao1>
                </div>
            </div>
        </div>
    )
}