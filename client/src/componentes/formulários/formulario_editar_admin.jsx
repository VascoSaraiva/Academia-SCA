import Botao1 from '../botões/botao1';
import Icone from '../ícones/display_icones';
import { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import PosEditar_Admin from '../outros/posEditar_admin';


export default function Editar_Admin({ keys, elemento, categoria, atualizarCategoria }) {


        let pedido;
        const [popup, setPopup] = useState(null);

        function update() {

                atualizarCategoria('Dashboard')
                setPopup(null)
        }

        function editarDados(e) {
                let n_inputs;
                e.preventDefault();

                switch (categoria) {
                        case "Eventos":
                                n_inputs = 6;
                                break;
                        case "Loja":
                                n_inputs = 11;
                                break;
                        case "Aprender":
                        case "Testemunhos":
                                n_inputs = 3;
                                break;
                        case "Barcos":
                                n_inputs = 10;
                                break;
                        case "Equipa":
                                n_inputs = 2;
                                break;
                        case "Dúvidas":
                                n_inputs = 4;
                                break;
                        case "Contactos":
                                n_inputs = 3;
                                break;

                }


                console.dir(e.target)

                let array_dados = [];

                for (let i = 0; i < n_inputs; i++) {
                        if (e.target[i].type == "checkbox") {
                                array_dados.push({ name: e.target[i].name, value: e.target[i].checked })
                        } else {
                                array_dados.push({ name: e.target[i].name, value: e.target[i].value })
                        }

                }

                let queryString = ''

                array_dados.map((elemento, index, row) => {
                        if (index + 1 === row.length) {
                                queryString = queryString + `${elemento.name}=${elemento.value}`
                        } else {
                                queryString = queryString + `${elemento.name}=${elemento.value}` + '&'
                        }
                })

                console.log(queryString)


                axios.post(`${import.meta.env.VITE_SERVER}/editarElemento?${queryString}&collection=${categoria}&id=${elemento._id}`)
                        .then(res => (setPopup(<PosEditar_Admin update={update} />)))
                        .catch(error => console.log(error))

        }


        switch (categoria) {
                case 'Eventos':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&titulo=?&descricao=?&tematica=?&data=?&hora=?`)
                        break;
                case 'Loja':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&tipo=?&nome=?&preço=?&materiais=?&URL=?`)
                        break;
                case 'Aprender':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&titulo=?&categoria=?&link=?`)
                        break;
                case 'Testemunhos':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&nome=?&comentario=?&estrelas=?`)
                        break;
                case 'Barcos':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&nome=?&velocidadeMaxima=?&tripulacaoMaxima=?&nivelDificuldade=?&materiais=?&peso=?&comprimento=?&boca=?&descricao=?&designer=?`)
                        break;
                case 'Equipa':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&nome=?&cargo=?`)

                        break;
                case 'Dúvidas':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&categoria=?&questao=?&resposta=?&destacar=?`)
                        break;
                case 'Contactos':
                        pedido = (`${import.meta.env.VITE_SERVER}/editarElemento?id=?&tipo=?&contacto=?&URL=?`)
                        break;
        }

        const renderInput = (key, defaultValue) => {
                let input;

                switch (key) {
                        case 'materiais':
                                if (categoria === 'Barcos') {
                                        input = (
                                                <input name={key}
                                                        type="text"
                                                        className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                                        defaultValue={defaultValue}
                                                />
                                        );
                                } else {
                                        input = (
                                                <input name={key}
                                                        type="text"
                                                        className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                                        defaultValue={defaultValue}
                                                />
                                        );
                                }
                                break;
                        case 'tematica':
                                input = (
                                        <select name={key}
                                                id="tematicaEventos"
                                                defaultValue={defaultValue}
                                                className="text-sm rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out border"
                                        >
                                                <option defaultValue="Voluntariado">Voluntariado</option>
                                                <option defaultValue="Lazer">Lazer</option>
                                                <option defaultValue="Competição">Competição</option>
                                                <option defaultValue="Aprendizagem">Aprendizagem</option>
                                        </select>
                                );
                                break;
                        case 'tipo':
                                if (categoria === 'Contactos') {
                                        input = (
                                                <input name={key}
                                                        type="text"
                                                        className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                                        defaultValue={defaultValue}
                                                />
                                        );
                                } else if (categoria === 'Loja') {
                                        input = (
                                                <select name={key}
                                                        id="tipoLoja"
                                                        defaultValue={defaultValue}
                                                        className="text-sm rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out border"
                                                >
                                                        <option defaultValue="Acessórios">Acessórios</option>
                                                        <option defaultValue="Roupa">Roupa</option>
                                                        <option defaultValue="Decoração">Decoração</option>
                                                        <option defaultValue="Papelaria">Papelaria</option>
                                                </select>
                                        );
                                }
                                break;
                        case 'tamanhos':

                                let tamanhos = ['XS', 'S', 'M', 'L', 'XL', 'XXL']


                                input = (

                                        <ul class="items-center w-full text-sm font-medium bg-white border rounded border-cinzento3 focus:outline-verde sm:flex">

                                                {tamanhos.map(tamanho => {
                                                        return (
                                                                <li class="w-full border-b sm:border-b-0 sm:border-r">
                                                                        <div class="flex items-center pl-3">
                                                                                <input name={tamanho} defaultChecked={elemento[key].find(item => item === tamanho) ? true : false} id="vue-checkbox-list" type="checkbox" value={tamanho} class="w-4 h-4 rounded" />
                                                                                <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium">{tamanho}</label>
                                                                        </div>
                                                                </li>
                                                        )
                                                })}

                                        </ul>
                                );
                                break;
                        case 'categoria':
                                if (categoria === 'Aprender') {
                                        input = (
                                                <select name={key}
                                                        id="categoriasAprender"
                                                        defaultValue={defaultValue}
                                                        className="text-sm rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out border"
                                                >
                                                        <option defaultValue="Lúdico">Lúdico</option>
                                                        <option defaultValue="Informativo">Informativo</option>
                                                        <option defaultValue="Educativo">Educativo</option>
                                                        <option defaultValue="Técnico">Técnico</option>
                                                </select>
                                        );
                                } else if (categoria === 'Dúvidas') {
                                        input = (
                                                <select name={key}
                                                        id="categoriasDúvidas"
                                                        defaultValue={defaultValue}
                                                        className="text-sm rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out border"
                                                >
                                                        <option defaultValue="Academia">Academia</option>
                                                        <option defaultValue="Loja Online">Loja Online</option>
                                                        <option defaultValue="Regatas">Regatas</option>
                                                        <option defaultValue="Aulas">Aulas</option>
                                                        <option defaultValue="Barcos">Barcos</option>
                                                        <option defaultValue="Atividades">Atividades</option>
                                                        <option defaultValue="Saúde">Saúde</option>
                                                        <option defaultValue="Voluntariado">Voluntariado</option>
                                                </select>
                                        );
                                }
                                break;
                        case 'data':
                                input = (
                                        <input name={key}
                                                defaultValue={defaultValue}
                                                type="date"
                                                className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                        />
                                );
                                break;
                        case 'hora':
                                input = (
                                        <input name={key}
                                                defaultValue={defaultValue}
                                                type="time"
                                                className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                        />
                                );
                                break;
                        case 'descricao':
                        case 'resposta':
                        case 'comentario':
                        case 'questao':
                                input = (
                                        <textarea name={key}
                                                rows={10}
                                                id="textarea"
                                                defaultValue={defaultValue}
                                                className="border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out"
                                                placeholder="Escreva aqui..."
                                        ></textarea>
                                );
                                break;
                        default:
                                switch (typeof defaultValue) {
                                        case 'number':
                                                input = (
                                                        <input name={key}
                                                                type="number"
                                                                className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                                                defaultValue={defaultValue}
                                                        />
                                                );
                                                break;
                                        case 'boolean':
                                                input = (
                                                        <div>
                                                                <input
                                                                        type="checkbox"
                                                                        id="html"
                                                                        name={key}
                                                                        value="destacar"
                                                                        defaultChecked={defaultValue}
                                                                />
                                                                <label htmlFor="html">Deseja destacar esta dúvida na homepage?</label>
                                                                <br />
                                                        </div>
                                                );
                                                break;
                                        default:
                                                input = (
                                                        <input name={key}
                                                                type="text"
                                                                className="border rounded border-cinzento3 focus:outline-verde block w-full p-2.5 ease-in-out"
                                                                defaultValue={defaultValue}
                                                        />
                                                );
                                                break;
                                }
                                break;
                }

                return (
                        <div>
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize text-[13px]">
                                        {key}
                                </label>
                                {input}
                        </div>
                );
        };

        const formContent = keys.map(key => renderInput(key, elemento[key]));


        if (keys && elemento) {
                return (
                        <div>
                                {popup}
                                <form className='p-6' onSubmit={e => editarDados(e)}>

                                        <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Edite os campos</div>
                                        <div className="mb-6 w-[500px] mx-auto py-8 [&>*]:my-5 [&>*]:text-[13px] ">
                                                {formContent}
                                        </div>
                                        <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' defaultValue="Concluir"></input></Botao1></div>

                                </form>
                        </div>

                )
        }

}


