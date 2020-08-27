import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import './styles.css';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleSendData(e) {
        e.preventDefault();
        console.log({
            name,
            email,
            phone,
            subject,
            message
        })
    }

    return (
        <div>
            <div className="contact">
                <Header title="Entre em contato conosco" />
            </div>
            <div className="formulario">
                <p>Tem alguma dúvida, sugestão ou deseja entrar em contato conosco? Preencha o formulário ou nos contate através desses contatos, estamos disponíveis para te atender!</p>

                <form onSubmit={handleSendData}>
                    <div className="rowform">
                        <input placeholder="Nome" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input placeholder="E-mail" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="rowform">
                        <input placeholder="Telefone" type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        <input placeholder="Assunto" type="text" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                    </div>
                    <div className="rowformmessage">
                        <input placeholder="Escreva sua mensagem..." type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className="sede">
                <div className="coluna">
                    <h2>Nossa sede</h2>
                    <p>Nossa sede fica na Comunidade do Totó, em Recife! Venha nos visitar, vamos te receber de braços abertos e com muito carinho!</p>
                    <p>Localização</p>
                    <p>Sede de Fundação Rua Ana Carneiro de Albuquerque, 94 - Totó Recife – PE – CEP: 50.791-460 Espaço Cultural Cores do Amanhã Av. Garota de Ipanema Box – 02/03 Totó - Jardim Planalto CEP: 50920-680 Recife – PE – Brasil</p>
                    <img src={img1} alt="teste" />
                </div>
                <div className="coluna">
                    <img src={img2} alt="teste" />
                    <p>Contato e informações</p>
                    <p>Movimento Social e Cultural Cores do Amanhã movimentoculturalcoresdoamanha@gmail.com (81) 3037.2338 CNPJ: 13.449.687/0001/99 | Inscrição Municipal: 476.864-7 Decreto de Lei de utilidade Pública Municipal: 18.621/19 Jouse Barata de Queiroz - Presidente Contatos: (81) 9 8876-3593 / (81) 9 9678-1217 e-mail: coresdoamanha2019@gmail.com Coordenação Geral Adelson Henrique | Erinaldo Maia | Fagner Cleiton Email: admcoresdoamanha19@gmail.com Coordenação Pedagógica Elton Ramos (Psicólogo) | Raquel Araújo (Pedagoga) Maria da Conceição - Pedagoga | Alberto Pires – Jurídico</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;