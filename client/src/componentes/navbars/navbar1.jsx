import { useState, useEffect } from "react";
import logo from "../../assets/imagens/logo_branco.png"
import logoSimples from "../../assets/imagens/logo_branco_simples.png"
import Icone from "../ícones/display_icones";
import itensMenu from "../data/dataMenu"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Hamburger from 'hamburger-react'

export default function Navbar1({ scroll }) {
  let scrollY = scroll()
  const location = useLocation();


  if (location.pathname != "/admin") {


    const [navWidth, setNavWidth] = useState('0px')
    const [visibility, setVisibility] = useState('hidden')
    const [isOpen, setOpen] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [navVisible, setNavVisibile] = useState('visible')
    const [navOpacity, setNavOpacity] = useState(1)
    const [contentWidth, setContentWidth] = useState('0px')
    const [contentInfoTitle, setContentInfoTitle] = useState('')
    const [contentInfo, setContentInfo] = useState([])

    function openNav() {
      const sidenavWidth = document.getElementById('mySidenav').style.width;
      const isNavOpen = sidenavWidth !== '0px';
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        if (isNavOpen) {
          setContentInfo([])
          setNavWidth('0px');
          setContentWidth('0px');
          setVisibility('hidden');
          setOpacity(0);

          if (scrollY !== 0) {
            setNavVisibile('hidden');
            setNavOpacity(0);
          }
        } else {
          if (window.innerWidth < 1536) {
            setNavWidth('50vw');
          } else {
            setNavWidth('30vw');
          }

          setVisibility('visible');
          setNavVisibile('visible');
          setOpacity(0.5);
        }
      } else {
        if (isNavOpen) {
          setContentInfo([])
          setNavWidth('0px');
          setContentWidth('0px');
          document.body.style.overflowY = 'scroll';
        } else {
          setNavWidth('100vw');
          document.body.style.overflowY = 'hidden';
        }
      }

    }

    function openContent(e) {

      itensMenu.map(pag => {
        if (pag.nome === e) {
          pag.subPáginas.map(subPag => {
            setContentInfo(oldArray => [...oldArray, <Link key={subPag.nome} onClick={() => {openNav(), setOpen(!isOpen)}} to={subPag.ligação}><h1 className="cursor-pointer flex opacity-60 hover:opacity-100 transition-opacity duration-100 my-[1.5rem]">{subPag.nome}</h1></Link>])
          })
        }
      })


      setContentInfoTitle(e)

      const width = window.innerWidth;
      setContentWidth(width >= 1024 ? (width < 1536 ? '50vw' : '30vw') : '100vw');
    }

    function closeContent() {
      setContentWidth('0px')
      setContentInfo([])
    }




    useEffect(() => {

      if (scrollY === 0 && document.getElementById('mySidenav').style.width === '0px') {
        setNavVisibile('visible')
        setNavOpacity(1)
      } else if (document.getElementById('mySidenav').style.width === '0px') {
        setNavVisibile('hidden')
        setNavOpacity(0)
      }

    }, [scrollY])


    return (

      <nav style={{ backgroundColor: "transparent", visibility: navVisible, transition: 'visibility 0.30s, opacity 0.30s', opacity: navOpacity }} className="h-[90px] lg:h-[100px] z-50 w-full mx-auto top-0 left-0 right-0 fixed flex justify-between items-center px-7 xs:px-10 xl:pl-14 lg:max-w-none">

        {/* MOBILE */}
        {/* <Icone tipo="utilizador" viewbox="0 0 100 100" className="fill-branco w-6 h-6 lg:hidden z-20" /> */}
        <Link className="contents" to='/home'><img loading='lazy' alt="logo academia de vela sca/aauav" src={logoSimples} className="w-12  ml-2 lg:hidden z-20" /></Link>
        <div className="lg:hidden z-20">
          <div onClick={openNav} className="z-40">
            <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          </div>

        </div>


        {/* PC */}
        <Link className="contents" to='/home'><img loading='lazy' alt="logo academia de vela sca/aauav" src={logo} className="w-48 hidden lg:block z-20" /></Link>

        <div className="hidden lg:flex items-center justify-center text-branco">
          {/* <p className="mx-5">Home</p>
          <p className="mx-5 opacity-60">Academia</p> */}
          {/* <Icone tipo="utilizador" viewbox="0 0 100 100" className="fill-branco w-6 h-6 mx-5 z-20" /> */}

          <div onClick={openNav} className="z-40">
            <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>


        {/* BACKGROUND ESCURO SEMI TRANSPARENTE */}
        <div style={{ visibility: visibility, transition: 'visibility 0.20s, opacity 0.20s linear', opacity: opacity }} className="bg-preto w-[100vw] fixed z-10 top-0 left-0 h-full" onClick={() => {openNav(), setOpen(!isOpen)}}></div>

        {/* INFORMAÇÕES */}
        <div style={{ width: navWidth, transition: '0.5s' }} id="mySidenav" className={`h-full fixed z-10 top-0 right-0 bg-[#131313] text-branco `}>



          <div className=" lg:w-full  lg:py-[3.3rem] pt-[95px] lg:pt-[110px] flex h-full flex-col font-unbounded">


            <div id="menuItems" className="border-t-2 border-cinzento3">

              {/* METEOROLOGIA */}
              <Link to={'/meteorologia'} onClick={() => {openNav(), setOpen(!isOpen)}} className="bg-gradient-to-r from-[#4083A8] to-[#3977c9] px-7 xs:px-10 xl:pl-14 bg-cover flex">

                <div className=" flex justify-between items-center w-full py-3 xl:py-5">
                  <div>
                    <p className="block text-[1.1rem] xl:text-[1.3rem] uppercase font-medium tracking-wider mb-1" href="#">Meteorologia</p>
                    <p className="font-inter whitespace-nowrap">Vê a temperatura, vento e mais.</p>
                  </div>

                  <Icone tipo="seta" viewbox="0 0 75 100" className="fill-branco w-4 h-4 z-20 " />

                </div>



              </Link>

              {/* ITENS MENU */}
              <div className="px-7 xs:px-10 xl:pl-14  text-[1.1rem] xl:text-[1.3rem] uppercase font-medium ">

                {itensMenu.map(e => {
                  if (e.subPáginas === false) {
                    return (
                      <Link key={e.nome} onClick={() => {openNav(), setOpen(!isOpen)}} to={e.ligação} ><h1 className="cursor-pointer my-[1.5rem] xl:my-[2rem] tracking-wider opacity-60 hover:opacity-100 transition-opacity duration-150">{e.nome}</h1></Link>
                    )
                  }
                  return (
                    <h1 key={e.nome} className="cursor-pointer my-[1.5rem] opacity-60 xl:my-[2rem] hover:opacity-100 transition-opacity duration-100 tracking-wider flex items-center" onClick={() => openContent(e.nome)}>{e.nome}
                      <Icone tipo="seta" viewbox="0 0 75 100" className="fill-branco w-4 h-4 z-20 ml-2" />
                    </h1>
                  )
                })}

                <div className="bg-[#131313] h-[100px] lg:h-[68px]"></div>

              </div>


            </div>


            <div className="flex items-center py-9 fixed bottom-0 bg-[#131313] pl-7 w-full border-t-2 border-t-cinzento3 xs:pl-10">
              <a href="https://www.instagram.com/academiadevela_sca/" target="target_blank"><Icone tipo="instagram_2" viewbox="0 0 100 98" className="fill-branco w-6 h-6 cursor-pointer z-20 mr-2 xxs:mr-3 xs:mr-4" onClick={() => {openNav(), setOpen(!isOpen)}} /></a>
              <a href="https://www.facebook.com/AcademiaVela.SportingAVEIRO/" target="target_blank"><Icone tipo="facebook_2" viewbox="0 0 100 100" className="fill-branco w-6 h-6cursor-pointer z-20 mx-2 xxs:mx-3 xs:mx-4" onClick={() => {openNav(), setOpen(!isOpen)}} /></a>
              <a href="https://www.youtube.com/@academiadevela-sportingclu2671/featured" target="target_blank"><Icone tipo="youtube_2" viewbox="0 0 100 73" className="fill-branco w-6 h-6 cursor-pointer z-20 mx-2 xxs:mx-3 xs:mx-4" onClick={() => {openNav(), setOpen(!isOpen)}} /></a>
              <a href="https://www.linkedin.com/company/sportingclubedeaveiro/?originalSubdomain=pT" target="target_blank"><Icone tipo="linkedin_2" viewbox="0 0 100 100" className="fill-branco w-6 h-6 cursor-pointer z-20 mx-2 xxs:mx-3 xs:mx-4" onClick={() => {openNav(), setOpen(!isOpen)}} /></a>
              <a href="https://www.tiktok.com/@academiavela_scaaauav" target="target_blank"><Icone tipo="tiktok_2" viewbox="0 0 87 100" className="fill-branco w-6 h-6 cursor-pointer z-20 ml-2 xxs:ml-3 xs:ml-4" onClick={() => {openNav(), setOpen(!isOpen)}} /></a>
            </div>

          </div>



        </div>

        <div style={{ width: contentWidth, transition: '0.5s' }} className="h-full fixed z-10 top-0 right-0 bg-[#131313] text-branco text-[1.1rem] xl:text-[1.3rem] uppercase font-medium font-unbounded tracking-wider whitespace-nowrap">

          <div className="mt-[90px] py-5 flex items-center z-40 border-b-2 border-cinzento3">

            <a className="flex items-center"> <Icone tipo="seta" viewbox="0 0 75 100" className="fill-branco w-4 h-4 ml-7 xs:ml-10 mr-4 cursor-pointer rotate-180" onClick={closeContent} />{contentInfoTitle}</a>
          </div>

          <div className="ml-7 xs:ml-10">
            {contentInfo}
          </div>

        </div>

      </nav>

    );

  }

}



