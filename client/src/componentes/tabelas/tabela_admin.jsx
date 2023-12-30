import Botao1 from '../botões/botao1';
import Icone from '../ícones/display_icones';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Editar_Admin from '../formulários/formulario_editar_admin';
import Eliminar_Admin from '../outros/eliminar_admin';
import PosEliminar_Admin from '../outros/posEliminar_admin';
import Adicionar_Admin from '../formulários/formulário_adicionar_admin';

export default function Tabela_Admin({ categoria, editar, formAdicionar, atualizarEditar, atualizarAdicionar, atualizarCategoria }) {


    let pedido;
    const [data, setData] = useState(null)
    const [dataKeys, setDataKeys] = useState(null)
    const [eliminar, setEliminar] = useState(null)
    const [popup, setPopup] = useState(null);


    useEffect(() => {
        setData(null)
        setDataKeys(null)
        atualizarEditar(null)
        atualizarAdicionar(null)
    }, [categoria])


    switch (categoria) {
        case 'Eventos':
            pedido = (`${import.meta.env.VITE_SERVER}/getEventos`)
            break;
        case 'Loja':
            pedido = (`${import.meta.env.VITE_SERVER}/getArtigos`)
            break;
        case 'Aprender':
            pedido = (`${import.meta.env.VITE_SERVER}/getAprender`)
            break;
        case 'Testemunhos':
            pedido = (`${import.meta.env.VITE_SERVER}/getTestemunhos`)
            break;
        case 'Barcos':
            pedido = (`${import.meta.env.VITE_SERVER}/getBarcos`)
            break;
        case 'Equipa':
            pedido = (`${import.meta.env.VITE_SERVER}/getMembros`)
            break;
        case 'Dúvidas':
            pedido = (`${import.meta.env.VITE_SERVER}/getDuvidas`)
            break;
        case 'Contactos':
            pedido = (`${import.meta.env.VITE_SERVER}/getContactos`)
            break;
    }

    const atualizarEliminar = (isDelete, id, categoria) => {
        if (!isDelete) {
            setEliminar(null)
        } else if (isDelete === 'delete') {
            setEliminar(null)

            Axios.post(`${import.meta.env.VITE_SERVER}/eliminarElemento?id=${id}&categoria=${categoria}`)
                .then(res => (setPopup(<PosEliminar_Admin atualizar={atualizar_popup} />)))
                .catch(error => console.log(error))
        }

    }

    function atualizar_popup() {
        setPopup(null);
        atualizarCategoria('Dashboard')
    }


    if (pedido && !data) {
        Axios.get(pedido)
            .then(res => { setData(res.data) })
            .catch(error => { setData('error') })
    } else {

        if (!dataKeys) {
            if (data != "") {
                //console.log(categoria)
                switch (categoria) {
                    case 'Eventos':
                        setDataKeys(['titulo', 'descricao', 'tematica', 'data', 'hora', 'inscricaoURL'])
                        break;
                    case 'Loja':
                        setDataKeys(['tipo', 'nome', 'preço', 'tamanhos', 'materiais', 'URL'])
                        break;
                    case 'Aprender':
                        setDataKeys(['titulo', 'categoria', 'link'])
                        break;
                    case 'Testemunhos':
                        setDataKeys(['nome', 'comentario', 'estrelas'])
                        break;
                    case 'Barcos':
                        setDataKeys(['nome', 'velocidadeMaxima', 'tripulacaoMaxima', 'nivelDificuldade', 'materiais', 'peso', 'comprimento', 'boca', 'descricao', 'designer'])
                        break;
                    case 'Equipa':
                        setDataKeys(['nome', 'cargo'])
                        break;
                    case 'Dúvidas':
                        setDataKeys(['categoria', 'questao', 'resposta', 'destacar'])
                        break;
                    case 'Contactos':
                        setDataKeys(['tipo', 'contacto', 'URL'])
                        break;
                }


            }

        }
    }

    function atualizarDados() {
        Axios.get(pedido)
            .then(res => { setData(res.data); atualizarCategoria('Dashboard') })
            .catch(error => { setData('error') })
    }


    if (data != 'error' && dataKeys) {
        if (!editar) {
            if (formAdicionar) {
                return (
                    <Adicionar_Admin atualizarDados={atualizarDados} categoria={categoria} dataKeys={dataKeys} />
                )


            } else {
                return (

                    <div className='mb-4 overflow-x-auto'>

                        {categoria != 'Barcos' ? <div className='mx-auto text-center'>
                            <button className='px-5 py-2.5 mt-7 mb-8 border-2 border-verde text-verde font-unbounded font-semibold text-subtitulo_grande hover:bg-verde hover:text-branco  transition delay-120 duration-500 ease-in-out ' onClick={() => atualizarAdicionar(true)}>Adicionar novo elemento</button>
                        </div> : <div className='mb-24' />}


                        {popup}

                        <table className="w-full text-[15px] table-fixed ">
                            <colgroup>
                                <col className='w-[120px]' />
                                {dataKeys.map(key => <col />)}
                                <col className='w-[120px]' />
                                <col className='w-[120px]' />
                            </colgroup>

                            <thead className=" border-b border-cinzento1 text-left">
                                <tr className='[&>*]:text-[13.5px] [&>*]:px-5 [&>*]:pb-6'>

                                    <th>
                                        <span className='ml-4'>Index</span>
                                    </th>

                                    {dataKeys.map(key => <th key={key} className="font-bold prose capitalize">{key}</th>)}

                                    <th>
                                        <span className='invisible'>Editar</span>
                                    </th>

                                    <th>
                                        <span className='invisible'>Eliminar</span>
                                    </th>

                                </tr>
                            </thead>


                            <tbody className='[&>*:nth-child(odd)]:bg-[#F8F8F8]'>

                                {data.map((e, index) => {
                                    return (
                                        <tr className="[&>*]:py-4">

                                            <td>
                                                <p className='px-5 overflow-hidden text-ellipsis whitespace-nowrap text-[15px] font-bold ml-4'>{index + 1}</p>
                                            </td>

                                            {dataKeys.map(key => {

                                                let value;

                                                if (typeof (e[key]) === 'object' && e[key].length === 0 || !e[key]) {
                                                    value = <Icone tipo="cruz" viewbox="0 0 100 100" className="fill-vermelho h-5 w-5 " />
                                                } else {
                                                    if (categoria === 'Dúvidas' && key === 'destacar') {
                                                        if (e[key]) {
                                                            value = <Icone tipo="correto" viewbox="0 0 100 100" className="fill-verde h-6 w-6 " />
                                                        }
                                                    } else {
                                                        if (typeof (e[key]) === 'object') {
                                                            value = e[key].join(', ')
                                                        } else {
                                                            value = e[key]
                                                        }
                                                    }
                                                }


                                                return (
                                                    <td key={e[key]}>
                                                        <p className='px-5 overflow-hidden text-ellipsis  whitespace-nowrap text-[15px] '>{value}</p>
                                                    </td>
                                                )


                                            })}

                                            <td align='center' onClick={() => atualizarEditar(e._id)} className="text-verde  overflow-hidden text-ellipsis">
                                                <div className='border-verde border rounded-full w-fit px-6 text-verde hover:bg-verde hover:text-branco py-3 mx-1 cursor-pointer transition delay-100 duration-300 ease-in-out '>Editar</div>
                                            </td>

                                            <td align='center' onClick={() => setEliminar(e._id)} className="text-vermelho  overflow-hidden text-ellipsis">
                                                <div className='border-vermelho border rounded-full text-vermelho hover:bg-vermelho hover:text-branco rounded-fu w-fit px-6  py-3 ml-1 mr-4 cursor-pointer transition delay-100 duration-300 ease-in-out '>Eliminar</div>
                                            </td>


                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>

                        {eliminar ? <Eliminar_Admin id={eliminar} atualizarEliminar={atualizarEliminar} categoria={categoria} /> : ''}

                    </div>

                )

            }


        } else {
            return (
                <Editar_Admin atualizarCategoria={atualizarCategoria} categoria={categoria} keys={dataKeys} elemento={data.find(item => item._id === editar)} />
            )

        }



    } else if (data === 'error') {

        return (

            <div className='mx-auto text-center shadow-2xl w-2/4  items-center p-5 bg-verde opacity-70 self-center mt-24'>
                <div className='font-unbounded font-medium text-branco'>Não há dados registados</div>
            </div>


        )

    }



}



