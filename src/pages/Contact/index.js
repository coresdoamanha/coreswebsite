import React from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img1 from './img/cores-Jouse@2x.png';
import img2 from './img/cores-Sede@2x.png';
import whatsapp from '../../assets/img/icons/whatsapp.svg';
import './styles.css';
import map from './img/map-marker-alt.png';
import cel from './img/phone.png';
import './styles.css';



function Contact(){
    window.scrollTo(0, 0);

    function handleSendData(e) {
        e.preventDefault();

        emailjs.sendForm('emailcores', 'template_srcy6eb', e.target, 'user_yIXuy9FYf4EAUCphes7tC')
            .then((result) => {
                toast.success("Seu e-mail foi enviado!");
            }, (error) => {
                toast.error("Erro ao encaminhar e-mail, tente novamente em alguns segundos.");
        });
    }

    return (
        <div className="contact">
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <div className="contactbg">
                <Header title="Entre em contato conosco" />
            </div>
            {/* <div className="form">
                <p>Tem alguma dúvida, sugestão ou deseja entrar em contato conosco? Clique no botão abaixo e fale direto com nossa equipe!</p>
                <a className="button" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso ajudar a ONG com doações!">Clique aqui e fale conosco <img src={whatsapp} alt="Ícone do Whatsapp" /></a>

            </div> */}
            <div className="form">
                <p>Tem alguma dúvida, sugestão ou deseja entrar em contato conosco? Preencha o formulário ou nos contate através desses contatos, estamos disponíveis para te atender!</p>

                <form onSubmit={handleSendData}>
                    <div className="rowform">
                        <input placeholder="Nome" type="text"  name="user_name" />
                        <input placeholder="E-mail" type="text"  name="user_mail" />
                    </div>
                    <div className="rowform">
                        <input placeholder="Telefone" type="text" name="user_contact" />
                        <input placeholder="Assunto" type="text" name="subject" />
                    </div>
                    <div className="rowform">
                        <textarea placeholder="Escreva sua mensagem..." type="text" name="message" />
                    </div>

        <button type="submit" className="button">Enviar</button>
                </form>
            </div>
            <div className="infos">
                <div className="column">
                    <div>
                        <h3>Nossa sede</h3>
                        <p>Nossa sede fica na Comunidade do Totó, em Recife! Venha nos visitar, vamos te receber de braços abertos e com muito carinho!</p>
                        <p><img src={map} alt="Ícone de mapa" className="icon"/>  Localização<br/>
                        Sede de Fundação<br/>Rua Ana Carneiro de Albuquerque, 94 - Totó Recife – PE – CEP: 50.791-460</p>
                        <p>Espaço Cultural Cores do Amanhã Av. Garota de Ipanema Box – 02/03 Totó - Jardim Planalto CEP: 50920-680 Recife – PE – Brasil</p>
                    </div>
                    <div>
                        <img src={img1} alt="teste" />
                    </div>
                </div>
                <div className="column">
                    <div>
                        <img src={img2} alt="teste" />
                    </div>
                    <div>
                        <p><img src={cel} alt="Ícone de telefone" className="icon"/> Contato e informações <br/> Movimento Social e Cultural Cores do Amanhã movimentoculturalcoresdoamanha@gmail.com <br/>(81) 3037.2338<br/>CNPJ: 13.449.687/0001/99 | Inscrição Municipal: 476.864-7 <br/> Decreto de Lei de utilidade Pública Municipal: 18.621/19</p>
                        <p>Jouse Barata de Queiroz - Presidente <br/>Contatos: (81) 9 8876-3593 / (81) 9 9678-1217 <br/>e-mail: coresdoamanha2019@gmail.com</p>
                        <p>Coordenação Geral Adelson Henrique | Erinaldo Maia | Fagner Cleiton <br/> Email: admcoresdoamanha19@gmail.com</p>
                        <p>Coordenação Pedagógica <br/>Elton Ramos (Psicólogo) | Raquel Araújo (Pedagoga) Maria da Conceição (Pedagoga) | Alberto Pires (Jurídico)</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;