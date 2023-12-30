import { useState } from "react";
import Botao1 from "../botões/botao1";
import ReCAPTCHA from "react-google-recaptcha";
import Axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function FormulárioEmail() {

    useEffect(() => {
        AOS.init()
    }, [])



    let [contentBotao, setContentBotao] = useState('Enviar');


    //variável useState que atualiza entre o botão disabled e ativo
    let [botaoSubmit, setBotaoSubmit] = useState(true);



    //variável useState que permite enviar o 'assunto' no email que é enviado
    let [assunto, setAssunto] = useState('');


    //valida se o captcha está checked
    function isCaptchaChecked() {
        return grecaptcha && grecaptcha.getResponse().length !== 0;
    }


    //valida o preenchimento do formulário
    const onChange = () => {
        if (contentBotao === 'Enviar') {


            let inputNome = document.getElementById('nome');
            let inputEmail = document.getElementById('email');
            let selectAssunto = document.getElementById('assunto');
            let textareaMensagem = document.getElementById('mensagem');

            if (inputNome.value != '' && inputEmail.value != '' && selectAssunto.value != '' && textareaMensagem.value != '' && isCaptchaChecked()) {
                setBotaoSubmit(false)
            } else {

                setBotaoSubmit(true)
            }

            setAssunto(selectAssunto.value)

            if (selectAssunto.value != "") {
                selectAssunto.style.color = 'black';
            } else {
                selectAssunto.style.color = '#9CA3B5';
            }
        }
    }

    const sendForm = (e) => {
        e.preventDefault()
        setContentBotao('Sending...')
        setBotaoSubmit(true)
        const formData = new FormData(e.target)
        Axios.post(`${import.meta.env.VITE_SERVER}/formularioEmail?nome=${e.target[0].value}&email=${e.target[1].value}&assunto=${e.target[2].value}&mensagem=${e.target[3].value}`)
            .then(() => setContentBotao('Email enviado.'))
            .catch(() => setContentBotao('Algo de errado se passou'))
    }

    return (
        <div data-aos="fade-up" data-aos-delay="300" className="container text-center ">

            <h1 className="text-titulo_pequeno sm:text-titulo_grande font-unbounded font-semibold mb-4">Enviar Email</h1>

            <p className="text-cinzento3 mb-5 sm:w-[25rem] lg:w-[28rem] mx-auto">Contacta-nos por email se pretenderes esclarecer alguma dúvida em particular.</p>

            <form id="emailEnviado" onSubmit={e => sendForm(e)} className="flex flex-col w-full mx-auto sm:w-[550px]" method="POST">


                <input onChange={onChange} id="nome" required className="my-2 focus:outline-none focus:border-verde focus:transition-colors duration-150 border-branco border-2 shadow-inner bg-cinzento1 px-5 py-3 rounded-lg" type="text" name="nome" placeholder="Nome" />

                <input onChange={onChange} id="email" required className="my-2 focus:outline-none  focus:border-verde focus:transition-colors duration-150 border-branco  bg-cinzento1 border-2  shadow-inner px-5 py-3 rounded-lg" type="email" name="email" placeholder="Email" />

                <select onChange={onChange} required className="my-2 focus:outline-none  focus:border-verde focus:transition-colors duration-150 border-branco  bg-cinzento1 border-2 shadow-inner px-5 py-3 rounded-lg text-[#9CA3AF]" name="assunto" id="assunto">
                    <option className="text-[#9CA3AF]" value="">Assunto</option>
                    <option className="text-preto" value="Dúvida Geral">Dúvida Geral</option>
                    <option className="text-preto" value="Academia">Academia</option>
                    <option className="text-preto" value="Loja">Loja</option>
                    <option className="text-preto" value="Regatas">Regatas</option>
                    <option className="text-preto" value="Aulas">Aulas</option>
                    <option className="text-preto" value="Barcos">Barcos</option>
                    <option className="text-preto" value="Atividades">Atividades</option>
                    <option className="text-preto" value="Saúde">Saúde</option>
                    <option className="text-preto" value="Voluntariado">Voluntariado</option>
                </select>

                <textarea onChange={onChange} required style={{ resize: 'none' }} className="mt-2 mb-5 focus:outline-none  focus:border-verde focus:transition-colors duration-150 border-branco  bg-cinzento1  border-2 px-5 py-3 rounded-lg  shadow-inner" name="mensagem" id="mensagem" cols="40" rows="5" placeholder="A sua mensagem"></textarea>

                <div className="mx-auto">
                <ReCAPTCHA
                    sitekey={import.meta.env.VITE_CAPTCHA}
                    onChange={onChange}
                />
                </div>
                
                <Botao1 disabled={botaoSubmit} id='botao_submit' cor='verde'>{contentBotao}</Botao1>
            </form>
        </div>

    )
}

