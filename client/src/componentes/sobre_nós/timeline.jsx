import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Timeline() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div data-aos="fade-up" data-aos-delay="400" className="bg-azul2 py-20">


            <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded text-branco text-center font-semibold mb-10">Datas</h1>

            <div className="timeline_mobile grid lg:hidden ml-5 w-[290px] xxs:w-[325px] xxs:mx-auto xs:w-[400px] text-branco">

                <div className="bg-branco relative">
                    <div className="timeline_dot bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-28 ml-4">
                    <span>1951</span>
                    <p>Fundação da Academia de Vela</p>
                </div>


                <div className="bg-branco relative">
                    <div className="timeline_dot bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-28 ml-4">
                    <span>2015</span>
                    <p>Colaboração com a fundação ECOMARE</p>
                </div>

                <div className="bg-branco relative">
                    <div className="timeline_dot bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-28 ml-4">
                    <span>2018</span>
                    <p>Inauguração das novas instalações</p>
                </div>

                <div className="bg-branco relative">
                    <div className="timeline_dot bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-28 ml-4">
                    <span>2019</span>
                    <p>Vice campeões nacionais Hansa</p>
                </div>

                <div className="bg-branco relative">
                    <div className="timeline_dot bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-20 ml-4">
                    <span>2023</span>
                    <p>Regata S. Joana</p>
                </div>

            </div>


            <div className="timeline hidden lg:grid mx-auto max-w-[950px] p-6 text-branco">


                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right"><p>Fundação do Sporting Clube de Aveiro <span className="ml-5">1951</span></p></div>
                </div>
                <div className="timeline__middle bg-branco">
                    <div className="timeline__point bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-32"></div>


                <div className="h-28"></div>
                <div className="timeline__middle bg-branco">
                    <div className="timeline__point bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date"><p><span className="mr-5">2015</span> Colaboração com a fundação ECOMARE</p></div>
                </div>

                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right"><p>Inauguração das novas instalações <span className="ml-5">2018</span></p></div>
                </div>
                <div className="timeline__middle bg-branco">
                    <div className="timeline__point bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="h-28"></div>

                <div className="h-28"></div>
                <div className="timeline__middle bg-branco">
                    <div className="timeline__point bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date"><p><span className="mr-5">2019</span>Vice campeões nacionais Hansa</p></div>
                </div>

                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right"><p>Regata S. Joana<span className="ml-5">2023</span></p></div>
                </div>
                <div className="timeline__middle bg-branco">
                    <div className="timeline__point bg-branco rounded-full border-azul2 border-4"></div>
                </div>
                <div></div>



            </div>
        </div>

    )
}