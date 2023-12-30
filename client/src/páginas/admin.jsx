import React, { useState, useEffect } from 'react';
import '../index.css';
import logo from "../assets/imagens/logo_branco.png"
import logo2 from "../assets/imagens/logo_branco_simples.png"
import Icone from "../componentes/ícones/display_icones.jsx";
import Cards_admin from '../componentes/cards/cards_admin';
import Tabela_Admin from '../componentes/tabelas/tabela_admin';
import Adicionar_Admin from '../componentes/formulários/formulário_adicionar_admin';
import Aside_admin from '../componentes/navbars/aside_admin';
import { Link } from 'react-router-dom';
import Editar_Admin from '../componentes/formulários/formulario_editar_admin';
import Botao1 from '../componentes/botões/botao1';
import axios from 'axios';

export default function Admin() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [editar, setEditar] = useState(null)
  const [formAdicionar, setFormAdicionar] = useState(null)
  const [categoria, setCategoria] = useState('Dashboard')
  const [credencial, setCredencial] = useState("") 
  const [login, setLogin] = useState(true)
  const [msg, setMsg] = useState("hidden")
  
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const atualizarEditar = (id) => {
    setEditar(id)
  }

  function atualizarAdicionar (e) {
    if(e){
      setFormAdicionar(true)
    }else{
      setFormAdicionar(null)
    }
    
  }

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  let itensAside = [
    {
      nome: 'Dashboard',
      icone: {
        tipo: 'velocímetro',
        viewbox: '0 0 100 85',
      }
    },
    {
      nome: 'Eventos',
      icone: {
        tipo: 'calendário_estrela',
        viewbox: '0 0 86 100',
      }
    },
    {
      nome: 'Loja',
      icone: {
        tipo: 'carrinho_compras',
        viewbox: '0 0 100 100',
      }
    },
    {
      nome: 'Aprender',
      icone: {
        tipo: 'chapéu_licenciatura',
        viewbox: '0 0 100 85',
      }
    },
    {
      nome: 'Testemunhos',
      icone: {
        tipo: 'lista',
        viewbox: '0 0 100 100',
      }
    },
    {
      nome: 'Barcos',
      icone: {
        tipo: 'barco',
        viewbox: '0 0 89 100',
      }
    },
    {
      nome: 'Equipa',
      icone: {
        tipo: 'par_pessoas',
        viewbox: '0 0 100 74',
      }
    },
    {
      nome: 'Dúvidas',
      icone: {
        tipo: 'duvidas',
        viewbox: '0 0 109 109',
      }
    },
    {
      nome: 'Contactos',
      icone: {
        tipo: 'telefone',
        viewbox: '0 0 100 100',
      }
    },
  ]


  function atualizarCategoria(categoria) {
   
    atualizarEditar(null)
    atualizarAdicionar(null)
    setCategoria(null)
    setCategoria(categoria)
    
  }

  const comparar = password => {

    password.preventDefault();

    axios.post(`${import.meta.env.VITE_SERVER}/verificarAdmin?chave=${credencial}`)
    .then((response) => {
      setLogin(response.data.chave)
      setMsg(response.data.msg)
    });
    
  } 

  
  
 

  if(login == true ){

    return(
    <div className='mx-auto text-center font-unbounded font-semibold w-2/4'>
      <div className='p-6 shadow-2xl mt-40'>
      <div className='mb-8 text-subtitulo_grande'>Administração</div>
      <form onSubmit={comparar}>
          <input value={credencial} onChange={e => setCredencial(e.target.value)} name="password" type="password"  id="default-input" placeholder='Password' className="border border-cinzento3 text-sm rounded-xl block w-full p-2.5 hover:bg-cinzento1 focus:ring-verde focus:border-verde active:border-verde  transition delay-75 duration-200 ease-in-out focus:bg-cinzento1 mb-4" />
          <div className={`p-3 bg-vermelho text-branco ${msg}`}>Credênciais erradas.</div>
          <Botao1><input type='submit' className='cursor-pointer' value="Entrar"></input></Botao1>                                                    
      </form>
      </div>
    </div>)  

  }else{

    
    return (
      <div className="flex bg-branco ">
  
        <aside className={`${isMenuOpen ? 'w-64' : 'w-0'} bg-verde shadow transition-all fixed duration-500 h-screen`}>
  
          <div className="mb-3 lg:mb-6 mx-auto text-center border-b border-branco">
            <img loading='lazy' 
              src={logo2}
              className={`w-${isMenuOpen ? '12' : '12'} text-center mx-auto pb-3 pt-2`}
            />
          </div>
  
  
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
  
  
            <ul className="text-preto text-[13px] md:text-[16px] p-2 md:p-4 lg:p-6 lg:text-[18px]">
  
  
              {itensAside.map(e => {
                return (
                  <li className="my-3" key={e.nome}>
                    <div onClick={() => atualizarCategoria(e.nome)} className="text-branco hover:text-cinzento1 cursor-pointer">
                      <div className='bg-verde_escuro transition delay-120 duration-500 ease-in-out hover:bg-cinzento1 hover:text-preto p-2 rounded-lg flex items-center'><div className='bg-eventos_laranja p-2.5 md:p-4 mr-2 md:mr-4 rounded-lg'><Icone tipo={e.icone.tipo} fill="#fff" viewbox={e.icone.viewbox} className="h-4 w-4 start-0" /></div><div>{e.nome}</div></div>
                    </div>
                  </li>
                )
              })}
  
  
            </ul>
  
          </nav>
        </aside>
  
  
  
  
        <main className="flex-1 bg-branco ml-64">
          <header className="bg-cinzento3 shadow py-4 md:py-6 px-2 flex justify-between">
            <button className="text-branco" onClick={toggleMenu}>
              <div className="mx-2">
                {isMenuOpen ? (
                  <Icone
                    tipo="menu_close"
                    viewbox="0 0 80 50"
                    fill="#fff"
                    className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 hover:fill-cinzento2 hover:transition-all hover:duration-500 transition-all duration-500"
                  />
                ) : (
                  <Icone
                    tipo="menu"
                    viewbox="0 0 100 60"
                    fill="#fff"
                    className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 hover:fill-cinzento2 hover:transition-all hover:duration-500 transition-all duration-500"
                  />
                )}
              </div>
            </button>
            <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-branco mx-2">Dashboard</h2>
            <div
              id="conta"
              className="text-branco relative mx-2"
              onClick={toggleDropdown}
            >
  
              <Icone
                tipo="casa"
                viewbox="0 0 100 120"
                fill="#fff"
                className="md:h-7 md:w-7 w-5 h-5 hover:fill-cinzento2 hover:transition-all hover:duration-500 transition-all duration-500 cursor-pointer"
              />
              <div
                className={`absolute z-30 bg-cinzento1 shadow-2xl mt-2 py-2 w-36 md:w-48 rounded-lg right-[-8px] transition-all duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
              >
                <a href="https://academia-vela-sca-frontend.onrender.com/home" className="block px-4 py-2 text-sm text-preto hover:bg-cinzento2">Home Page</a>
                
              </div>
            </div>
          </header>
  
  
          {categoria != 'Dashboard' ? <Tabela_Admin atualizarCategoria={atualizarCategoria} formAdicionar={formAdicionar} atualizarAdicionar={atualizarAdicionar} editar={editar} atualizarEditar={atualizarEditar} categoria={categoria} /> : <Cards_admin atualizarCategoria={atualizarCategoria} />}
          
  
  
        </main>
  
  
  
      </div>
    );
  }

  
}


