

export default function Eliminar_Admin({atualizarEliminar, id, categoria}) {
    return (
        <div className="h-screen fixed top-0 left-0 z-30 w-full bg-preto bg-opacity-70 flex justify-center items-center">
            <div className="bg-branco w-[450px] flex justify-center items-start flex-col py-8 rounded px-5">
                <p className="font-semibold text-[22px] mb-2">Pretende eliminar?</p>
                <p className="text-[13px] text-cinzento3">Após a eliminação deste elemento não será possível recuperar esta informação a partir da base de dados.</p>
                <div className="flex justify-between w-full items-center pt-10">
                <p className="bg-vermelho text-[14px] text-branco px-5 py-2 rounded-full" onClick={() => atualizarEliminar(null)}>Não, quero voltar.</p>
                    <p className="bg-verde text-[14px] text-branco px-5 py-2 rounded-full"  onClick={() => atualizarEliminar('delete', id, categoria)}>Sim, quero eliminar.</p>
                    
                </div>
            </div>
        </div>
    )
}