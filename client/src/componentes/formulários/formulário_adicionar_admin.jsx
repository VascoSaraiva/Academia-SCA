import Botao1 from '../botões/botao1';
import Icone from '../ícones/display_icones';
import { useState } from 'react';
import axios from 'axios';
import PosAdicionar_Admin from '../outros/posAdicionar_admin';

export default function Adicionar_Admin({ categoria, dataKeys, atualizarDados }) {



        const [popup, setPopup] = useState(null);

        function update() {
                atualizarDados()
                setPopup(null)
        }

        function adicionarDados(e) {
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


                axios.post(`${import.meta.env.VITE_SERVER}/adicionarElemento?${queryString}&collection=${categoria}`)
                        .then(res => (setPopup(<PosAdicionar_Admin update={update} />)))
                        .catch(error => console.log(error))

        }


        let formAdd;


        switch (categoria) {

                case "Eventos":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="textarea" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <textarea name={dataKeys[1]} id="textarea" className='border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out' placeholder='Escreva aqui...'></textarea>
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="categoria" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <select name={dataKeys[2]} id="categoria" className="border border-cinzento3 transition delay-75 duration-200 ease-in-out text-sm rounded-xl focus:ring-verde focus:border-verde active:border-verde block w-full p-2.5 hover:bg-cinzento1 focus:bg-cinzento1">
                                                                        <option value="Voluntariado">Voluntariado</option>
                                                                        <option value="Lazer">Lazer</option>
                                                                        <option value="Competição">Competição</option>
                                                                        <option value="Aprendizagem">Aprendizagem</option>
                                                                </select>
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[3]}</label>
                                                                <input name={dataKeys[3]} type="date" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl  block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[4]}</label>
                                                                <input name={dataKeys[4]} type="time" id="default-input" className="border border-cinzento3 text-sm rounded-xl  block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[5]}</label>
                                                                <input name={dataKeys[5]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Aprender":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="categoria" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <select name={dataKeys[1]} id="categoria" className="border border-cinzento3 transition delay-75 duration-200 ease-in-out text-sm rounded-xl focus:ring-verde focus:border-verde active:border-verde block w-full p-2.5 hover:bg-cinzento1 focus:bg-cinzento1">
                                                                        <option value="Lúdico">Lúdico</option>
                                                                        <option value="Técnico">Técnico</option>
                                                                        <option value="Educativo">Educativo</option>
                                                                        <option value="Informativo">Informativo</option>
                                                                </select>
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <input name={dataKeys[2]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Equipa":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <input type="text" name={dataKeys[1]} id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Testemunhos":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="textarea" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <textarea name={dataKeys[1]} id="textarea" className='border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out' placeholder='Escreva aqui...'></textarea>
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <input name={dataKeys[2]} type="number" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Barcos":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <input name={dataKeys[1]} type="number" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <input name={dataKeys[2]} type="number" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[3]}</label>
                                                                <input name={dataKeys[3]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[4]}</label>
                                                                <input name={dataKeys[4]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[5]}</label>
                                                                <input name={dataKeys[5]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[6]}</label>
                                                                <input name={dataKeys[6]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[7]}</label>
                                                                <input name={dataKeys[7]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                        <div className='my-5'>
                                                                <label htmlFor="textarea" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[8]}</label>
                                                                <textarea name={dataKeys[8]} id="textarea" className='border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out' placeholder='Escreva aqui...'></textarea>
                                                        </div>

                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[9]}</label>
                                                                <input name={dataKeys[9]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Dúvidas":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label for="categoria" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <select name={dataKeys[0]} id="categoria" className="border border-cinzento3 transition delay-75 duration-200 ease-in-out text-sm rounded-xl focus:ring-verde focus:border-verde active:border-verde block w-full p-2.5 hover:bg-cinzento1 focus:bg-cinzento1">
                                                                        <option value="Academia">Academia</option>
                                                                        <option value="Loja Online">Loja Online</option>
                                                                        <option value="Regatas">Regatas</option>
                                                                        <option value="Aulas">Aulas</option>
                                                                        <option value="Barcos">Barcos</option>
                                                                        <option value="Loja Online">Atividades</option>
                                                                        <option value="Saúde">Saúde</option>
                                                                        <option value="Voluntariado">Voluntariado</option>
                                                                </select>
                                                        </div>

                                                        <div className='my-5'>
                                                                <label for="textarea" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <textarea name={dataKeys[1]} id="textarea" className='border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out' placeholder='Escreva aqui...'></textarea>
                                                        </div>
                                                        <div className='my-5'>
                                                                <label for="textarea" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <textarea name={dataKeys[2]} id="textarea" className='border border-cinzento3 focus:bg-cinzento1 w-full rounded-xl px-2 py-1 transition delay-75 duration-200 ease-in-out' placeholder='Escreva aqui...'></textarea>
                                                        </div>
                                                        <div className='my-5'>
                                                                <div className="items-center mb-4">
                                                                        <div className='prose capitalize font-medium '>{dataKeys[3]}</div>
                                                                        <div className='flex'>
                                                                                <input name={dataKeys[3]} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 rounded " />
                                                                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">Deseja destacar esta duvida na Homepage?</label>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Loja":


                        //console.log(dataKeys)

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">

                                                        {/* Tipo */}
                                                        <div className='my-5'>
                                                                <label htmlFor="categoria" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <select id="categoria" name={dataKeys[0]} className="border border-cinzento3 transition delay-75 duration-200 ease-in-out text-sm rounded-xl focus:ring-verde focus:border-verde active:border-verde block w-full p-2.5 hover:bg-cinzento1 focus:bg-cinzento1">
                                                                        <option value="Roupa">Roupa</option>
                                                                        <option value="Acessórios">Acessórios</option>
                                                                        <option value="Decoração">Decoração</option>
                                                                        <option value="Papelaria">Papelaria</option>
                                                                </select>
                                                        </div>

                                                        {/* Nome */}
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <input name={dataKeys[1]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                        {/* Preço */}
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <input name={dataKeys[2]} type="number" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>


                                                        {/* Tamanhos */}
                                                        <div className='prose capitalize font-medium max-w-full'>
                                                                <div>{dataKeys[3]}</div>
                                                                <div className='w-full'>
                                                                        <ul className="items-center flex w-full text-sm font-medium bg-white border rounded border-cinzento3 focus:outline-verde">

                                                                                <li className="w-full border-b sm:border-b-0 sm:border-r flex justify-between pl-0">

                                                                                        <div className="flex items-center">

                                                                                                <input name='XS' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='XS' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">XS</label>

                                                                                        </div>

                                                                                        <div className="flex items-center pl-3">

                                                                                                <input name='S' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='S' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">S</label>

                                                                                        </div>

                                                                                        <div className="flex items-center pl-3">

                                                                                                <input name='M' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='M' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">M</label>

                                                                                        </div>

                                                                                        <div className="flex items-center pl-3">

                                                                                                <input name='L' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='L' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">L</label>

                                                                                        </div>

                                                                                        <div className="flex items-center pl-3">

                                                                                                <input name='XL' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='XL' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">XL</label>

                                                                                        </div>

                                                                                        <div className="flex items-center pl-3">

                                                                                                <input name='XXL' defaultChecked={false} id="vue-checkbox-list" type="checkbox" value='XXL' className="w-4 h-4 rounded" />

                                                                                                <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium">XXL</label>

                                                                                        </div>

                                                                                </li>

                                                                        </ul>
                                                                </div>
                                                        </div>


                                                        {/* Materiais */}
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[4]}</label>
                                                                <input name={dataKeys[4]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                        {/* URL */}
                                                        <div className='my-5'>
                                                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[5]}</label>
                                                                <input name={dataKeys[5]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>






                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;

                case "Contactos":

                        formAdd = <div>
                                <div className="mt-6 w-3/4 mx-auto">
                                        <form onSubmit={e => adicionarDados(e)} className='shadow-2xl p-6'>
                                                <div className='font-unbounded text-titulo_pequeno font-semibold text-center pt-4'>Preencha os campos para adicionar</div>
                                                <div className="w-3/4 mx-auto py-4">
                                                        <div className='my-5'>
                                                                <label for="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[0]}</label>
                                                                <input name={dataKeys[0]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label for="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[1]}</label>
                                                                <input name={dataKeys[1]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>
                                                        <div className='my-5'>
                                                                <label for="default-input" className="block mb-2 text-sm font-medium prose capitalize">{dataKeys[2]}</label>
                                                                <input name={dataKeys[2]} type="text" id="default-input" placeholder='Escrever...' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1" />
                                                        </div>

                                                </div>
                                                <div className='mx-auto text-center'><Botao1><input type="submit" className='cursor-pointer' value="Adicionar"></input></Botao1></div>

                                        </form>
                                </div>
                        </div>
                        break;
        }



        return (

                <div>
                        {popup}
                        {formAdd}

                </div>
        )
}