import logoSimples from '../../assets/imagens/logo_branco_simples.png'
import logo from '../../assets/imagens/logo_branco.png'
import Icone from '../ícones/display_icones'
import { useEffect, useState } from 'react';
import Axios from 'axios'
import bg from '../../assets/imagens/fotografias_convites/fotografia_2.webp'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from "swiper";
import "swiper/css";
import "../../index.css";


import parceiro1 from '../../assets/imagens/parceiros/1.png'
import parceiro2 from '../../assets/imagens/parceiros/2.png'
import parceiro3 from '../../assets/imagens/parceiros/3.png'
import parceiro4 from '../../assets/imagens/parceiros/4.png'

export default function Footer(props) {

    let windowWidth = props.scroll()
    const location = useLocation();

    if (location.pathname != "/admin") {

        const [data, setData] = useState(null)

        useEffect(() => {
            window.scrollTo(0, 0);
            Axios.get(`${import.meta.env.VITE_SERVER}/getContactos`)
                .then(res => setData(res.data))
                .catch(error => console.log(error))
        }, [])


        if (data) {

           
            return (
                <div>
                    <div className='border-t border border-cinzento2'>
                        <Swiper slidesPerView={windowWidth.width > 900 ? 3 : 1} initialSlide={1} autoplay={{delay: 2900}} modules={[Autoplay]} className='pb-3 pt-3'>
                            <SwiperSlide>
                                <img loading='lazy' className='h-28 mx-auto' src={parceiro1} alt="Associação académica da universidade de Aveiro" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img loading='lazy' className='h-28 mx-auto' src={parceiro2} alt="Câmara municipal de aveiro" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img loading='lazy' className='h-28 mx-auto' src={parceiro3} alt="Porto de aveiro" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img loading='lazy' className='h-28 mx-auto' src={parceiro4} alt="Universidade de Aveiro" />
                            </SwiperSlide>
                        </Swiper>


                    </div>

                    <footer style={{ backgroundImage: `url(${bg})` }} className="bg-cover lg:bg-contain text-center lg:text-left h-[710px] lg:h-[424px] text-branco relative border-verde border-t-8">



                        <div className='absolute left-0 right-0 mx-auto z-10 h-[710px] lg:h-[424px] '>
                            <article className='lg:flex lg:py-14 justify-center w-full items-center'>

                                <figure className='pt-10 lg:px-10 lg:pt-0'>
                                    <Link to="/home" className='[&>*]:mx-auto [&>*]:lg:w-48 [&>*]:lg:h-[3.7rem] [&>*]:w-12  [&>*]:h-12'>
                                        <img loading='lazy' alt="logo academia de vela sca/aauav" src={logo} className='hidden lg:block' />
                                        <img loading='lazy' alt="logo academia de vela sca/aauav" src={logoSimples} className='lg:hidden' />
                                    </Link>
                                </figure>

                                <section className='flex justify-center items-center [&>*]:mx-3 mt-10 lg:hidden'>
                                    {data.map(e => {
                                        switch (e.tipo) {
                                            case 'Instagram':
                                                return (<Icone key={e.tipo} tipo='instagram_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' />)
                                            case 'Facebook':
                                                return (<Icone key={e.tipo} tipo='facebook_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' />)
                                            case 'Youtube':
                                                return (<Icone key={e.tipo} tipo='youtube_2' viewbox='0 0 100 73' className='h-6 w-6 fill-branco' />)
                                            case 'LinkedIn':
                                                return (<Icone key={e.tipo} tipo='linkedin_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' />)
                                            case 'TikTok':
                                                return (<Icone key={e.tipo} tipo='tiktok_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' />)
                                        }
                                    })}

                                </section>


                                <section className='mt-10 lg:mt-0 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-3  lg:px-10'>
                                    {data.map(e => {
                                        switch (e.tipo) {
                                            case 'Telefone':
                                                return (
                                                    <div key={e.tipo}>
                                                        <h1 className='font-semibold'>{e.tipo}</h1>
                                                        <p className='text-[15px] font-light'>{e.contacto}</p>
                                                    </div>

                                                )
                                            case 'Email Geral':
                                                return (
                                                    <div key={e.tipo}>
                                                        <h1 className='font-semibold'>{e.tipo}</h1>
                                                        <p className='text-[15px] font-light'>{e.contacto}</p>
                                                    </div>

                                                )
                                            case 'Email Cursos':
                                                return (
                                                    <div key={e.tipo}>
                                                        <h1 className='font-semibold'>{e.tipo}</h1>
                                                        <p className='text-[15px] font-light'>{e.contacto}</p>
                                                    </div>

                                                )
                                        }
                                    })}
                                </section>



                                <section className='pt-10 pb-10 lg:mx-10 lg:rounded lg:p-0'>
                                    <iframe className='lg:rounded' loading='lazy' src="https://maps.google.com/maps?width=700&amp;height=340&amp;hl=en&amp;q=Sporting%20Clube%20de%20Aveiro%20-%20Academia%20de%20Vela+(Sporting%20Clube%20de%20Aveiro%20-%20Academia%20de%20Vela)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" width='100%' height='204px' style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
                                </section>


                            </article>

                            <section className='justify-center items-center [&>*]:mx-3 pb-10 hidden lg:flex'>
                                {data.map(e => {
                                    switch (e.tipo) {
                                        case 'Instagram':
                                            return (<a key={e.tipo} href={e.URL} target='target_blank'><Icone tipo='instagram_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' /></a>)
                                        case 'Facebook':
                                            return (<a key={e.tipo} href={e.URL} target='target_blank'><Icone tipo='facebook_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' /></a>)
                                        case 'Youtube':
                                            return (<a key={e.tipo} href={e.URL} target='target_blank'><Icone tipo='youtube_2' viewbox='0 0 100 73' className='h-6 w-6 fill-branco' /></a>)
                                        case 'LinkedIn':
                                            return (<a key={e.tipo} href={e.URL} target='target_blank'><Icone tipo='linkedin_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' /></a>)
                                        case 'TikTok':
                                            return (<a key={e.tipo} href={e.URL} target='target_blank'><Icone tipo='tiktok_2' viewbox='0 0 100 100' className='h-6 w-6 fill-branco' /></a>)
                                    }
                                })}

                            </section>

                            <section className='pb-5 lg:text-center'>
                                <p className='text-cinzento2 text-[12px]'>© 2023 Sporting Clube de Aveiro</p>
                            </section>
                        </div>




                    </footer>
                </div>
            )
        }

    }

}