import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import palette from './img/palette.png';
import boxopen from './img/box-open.png';
import paintbrush from './img/paint-brush.png';
import handshelping from './img/hands-helping.png';
import handheart from './img/hand-holding-heart.png';
import comoajudar from './img/cores_como-ajudar_doacao.png';

import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';

import qrcode from '../../assets/img/qrcode.jpg';
import './styles.css';

function Infos(){
    return (
        <div>
            <div className="infos">
                <Header title="Você pode ajudar o Cores de várias formas" />
            </div>
            <div className="howtohelp">
                <p>Se interessou pelo Cores do Amanhã e deseja nos ajudar a impactar cada vez mais vidas e participar da nossa história? Há diversas formas que você pode fazer isso! Confira abaixo, toda ajuda é muito bem vinda!</p>

                <div className="howhelp">
                    <div className="boxopen">
                        <img src={boxopen} alt="teste" />
                        <p>Doações</p>
                    </div>
                    <div className="handshelping">
                        <img src={handshelping} alt="teste" />
                        <p>Sendo um parceiro</p>
                    </div>
                    <div className="handheart">
                        <img src={handheart} alt="teste" />
                        <p>Sendo voluntário</p>
                    </div>
                    <div className="paintbrush">
                        <img src={paintbrush} alt="teste" />
                        <p>Fortaleça a arte e artesanato</p>
                    </div>
                    <div className="palette">
                        <img src={palette} alt="teste" />
                        <p>Caminho das Cores</p>
                    </div>
                </div>

                <h3>Algumas formas que você pode doar:</h3>

                <p>Toda doação feita é distribuída em nossos eventos e utilizadas nas ações e oficinas. Toda doação é bem vinda e pode trazer um sorriso para uma crianças ou a alegria para um lar. Entre em contato conosco e contribua!</p>
            </div>
            <div className="donation-area">
                <div className="back">
                    <div className="element">
                        <p>Faça sua doação:</p>
                        <p>Banco do Brasil</p>
                        <p>Agência: 4118-1</p>
                        <p>CC: 20.766-7</p>
                    </div>
                </div>
                <div className="back purple">
                    <div className="element">
                        <p>Você também pode fazer sua doação através do QR Code:</p>
                        <img src={qrcode} alt="QRCode da conta bancária para doações." />
                    </div>
                </div>
                <div className="back">
                    <div className="element">
                        <p className="ajuste">Você também pode entrar em contato conosco através do Whatsapp!</p>
                        <a href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá!">Clique aqui e fale conosco</a>
                    </div>
                </div>
            </div>
            <div className="comoajudar">
                <img src={comoajudar} alt="teste" />
            </div>
            <div className="ultima">
                <h3>Outras formas de ajudar</h3>
                <div className="cardimage orange">
                    <div>
                        <img src={img1} alt="teste" />
                    </div>
                    <div>
                        <h2>Contratando um de nossos artistas</h2>
                        <p>Precisando renovar algum espaço? Dar mais vida e alegria á alguma parede? A a arte tem esse poder! Contrate um de nossos artistas! Além de ter uma arte exclusiva sua, você vai estar ajudando o Cores do Amanhã. Nossos artistas fazem graffitis, aerografia e painéis e também desenhos que podem virar lindos quadros para você poder presentear você mesmo ou alguém querido. Se interessou? Entre em contato conosco para solicitar o seu trabalho!</p>
                        <Button title="Quero contratar" to="/" />
                    </div>
                </div>
                <div className="cardimage red">
                    <div>
                        <h2>Seja um parceiro fixo</h2>
                        <p>Deseja ser um parceiro fixo do Cores do Amanhã? Essa atitude nos ajuda a manter nosso espaço e as atividades que nele acontece, como festas, oficinas, estrutura básica, compra de materiais e lanches para as crianças que fazem parte das atividades do Cores. Como forma de agradecimento, colocamos a marca da sua empresa na Homepage do nosso site! Entre em contato conosco, sua contribuição é muito importante para continuarmos a fazer diferença na vida das pessoas da nossa comunidade.</p>
                        <Button title="Quero ser um parceiro" to="/" />
                    </div>
                    <div>
                        <img src={img2} alt="teste" />
                    </div>
                </div>
                <div className="cardimage green">
                    <div>
                        <img src={img3} alt="teste" />
                    </div>
                    <div>
                        <h2>Seja um voluntário</h2>
                        <p>Você também pode nos ajudar sendo um de nossos voluntários! Você gosta de trabalhar com crianças, jovens e a comunidade em geral? Pode desenvolver uma atividade artística que seja voltada a cultura e cidadania? Aqui é o lugar certo! Toda ajuda é muito bem vinda e o trabalho voluntário é a base de nosso espaço, vamos juntos levar educação, lazer muita cultura para nossa comunidade!</p>
                        <Button title="Quero ser voluntário" to="/" />
                    </div>
                </div>
                <div className="cardimage yellow">
                    <div>
                        <h2>Compre artesanato feito na comunidade</h2>
                        <p>Você também pode apoiar o Cores comprando artesanato feito pelos artistas da nossa comunidade. Bolsas, telas, camisetas, agendas.</p>
                        <Button title="Quero comprar" to="/" />
                    </div>
                    <div>
                        <img src={img4} alt="teste" />
                    </div>
                </div>
                <div className="cardimage orange">
                    <div>
                        <img src={img5} alt="teste" />
                    </div>
                    <div>
                        <h2>Caminho das Cores</h2>
                        <p>Quer conhecer mais Recife, o Cores do Amanhã e nossa comunidade? Participe do Caminho das Cores! Através dessa iniciativa oferecemos visitas turísticas para conhecer os graffitis lindos da nossa região, o nosso bairro e o Cores!</p>
                        <Button title="Quero participar" to="/" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Infos;