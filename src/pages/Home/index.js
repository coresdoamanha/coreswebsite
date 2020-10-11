import React from 'react';
import ReactPlayer from 'react-player/youtube'
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import palette from '../../assets/img/icons/palette.svg';
import heart from '../../assets/img/icons/heart.svg';
import paintbrush from '../../assets/img/icons/paint-brush.svg';
import music from '../../assets/img/icons/music.svg';
import whatsapp from '../../assets/img/icons/whatsapp.svg';

import par1 from '../../assets/img/sesc.png';
import par2 from '../../assets/img/bemmaior.jfif';

import CF12 from './img/home_cores-femininas@2x.png';
import CF22 from './img/home_cores-femininas2@2x.png';
import CS12 from './img/home_cores-sonoras@2x.png';
import CS22 from './img/home_cores-sonoras2@2x.png';

import qrcode from './img/home_qr-code.png';

import { Link } from 'react-router-dom';

import './styles.css';

function Home() {
    window.scrollTo(0, 0);
    return (
        <div className="home">
            <div className="homebg">
                <Header title="Você pode fortalecer o Cores do Amanhã e, ao mesmo tempo, trazer mais arte para sua vida!">
                    <div>
                        <Button title="Saiba como ajudar" path="/como-ajudar" />
                    </div>
                </Header>
            </div>
            <div className="homepillars">
                <p>O Cores do Amanhã é um grupo luta por dias mais dignos para a infância e juventude de Pernambuco, promovendo a transformação social e inclusão através da arte, cultura e esportes.</p>
                <h2>Nossos pilares</h2>
                <div className="homecards">
                    <div className="homecard card-1">
                        <img src={palette} alt="Paleta de pintura." />
                        <p>Transformação através da arte.</p>
                    </div>
                    <div className="homecard card-2">
                        <img src={paintbrush} alt="Pincel de pintura." />
                        <p>Valorização de diversas formas de expressão artísticas.</p>
                    </div>
                    <div className="homecard card-3">
                        <img src={music} alt="Símbolo musical." />
                        <p>Difundir o Hip Hop como um movimento cultural, político e social.</p>
                    </div>
                    <div className="homecard card-4">
                        <img src={heart} alt="Desenho de coração." />
                        <p>Amor ao próximo.</p>
                    </div>
                </div>
                <div className="homebutton">
                    <Button path="/sobre-nos" title="Saiba mais sobre nossa história" />
                </div>
            </div>
            <div className="homeprojects">
                <div className="prow">
                    <div>
                        <h3>Cores Femininas</h3>
                        <p>Esse projeto reúne várias artistas, que atuam dentro e fora do Hip Hop, em ações que tem como objetivo lutar pelos direitos, espaços e pelo fim dos diversos tipos de violências sofridas pelas mulheres.</p>
                        <div className="homebutton">
                            <Button path="/projetos" title="Conheça o Projeto"/>
                        </div>   
                    </div>
                    <div>
                        <img src={CF12} alt="teste" />
                    </div>
                    <div>
                        <img src={CF22} alt="teste" />
                    </div>
                </div>
                <div className="prow">
                    <div>
                        <img src={CS12} alt="teste" />
                    </div>
                    <div>
                        <img src={CS22} alt="teste" />
                    </div>
                    <div>
                        <h3>Cores Sonoras</h3>
                        <p>Esse projeto busca dar oportunidades aos adolescentes do bairro Totó através da construção de novos rumos através da música e da cultura popular brasileira.</p>
                        <div className="homebutton">
                            <Button path="/" title="Conheça o Projeto"/>
                        </div>
                    </div>
                </div>
                <div className="prow">
                    <div>
                        <h3>Caminho das Cores</h3>
                        <p>Participe do Caminho das Cores! Através dessa iniciativa oferecemos visitas turísticas para conhecer os graffitis lindos da nossa região, o nosso bairro a sede do Cores!</p>
                        <div className="homebutton">
                            <Button path="/projetos" title="Conheça o Projeto"/>
                        </div>   
                    </div>
                    <div>
                        <img src={CF12} alt="teste" />
                    </div>
                    <div>
                        <img src={CF22} alt="teste" />
                    </div>
                </div>
            </div>
            <div className="homevideo">
                <h2>Quer conhecer mais detalhes da história do Cores? Assista ao vídeo abaixo! &#10084;</h2>
                <ReactPlayer className="video" url='https://www.youtube.com/embed/bwYuAUSn8cM?start=35' playing={true} controls={true} muted />
                <div className="donation">
                    <div className="element">
                        <div>
                            <p>Faça sua doação:</p>
                            <p>Banco do Brasil</p>
                            <p>Agência: 4118-1</p>
                            <p>CC: 20.766-7</p>
                        </div>
                    </div>
                    <div className="element">
                        <p>Você também pode fazer sua doação através do QR Code:</p>
                        <img src={qrcode} alt="QRCode da conta bancária para doações." />
                    </div>
                    <div className="element">
                        <p>Você também pode entrar em contato conosco através do WhatsApp! <br/> (81) 9 8876-3593</p>
                        <div>
                            <a className="button" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso ajudar a ONG com doações!">Clique aqui e fale conosco <img src={whatsapp} alt="Ícone do Whatsapp" /></a>
                        </div>
                    </div>
                </div>
                <div className="help">
                    <p>Precisamos da sua ajuda! Faça sua doação ou <Link to="/infos">clique aqui</Link> para conhecer diversas formas de colaborar com o Cores!</p>
                </div>
                <div className="partners">
                    <h2>Parceiros:</h2>
                    <div>
                        <img src={par1} alt="teste" />
                        <img src={par2} alt="teste" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;