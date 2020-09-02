import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import palette from '../../assets/img/icons/palette.svg';
import heart from '../../assets/img/icons/heart.svg';
import paintbrush from '../../assets/img/icons/paint-brush.svg';
import music from '../../assets/img/icons/music.svg';

import qrcode from '../../assets/img/qrcode.jpg';

import cf1 from './img/cf-1.png';
import cf2 from './img/cf-2.png';
import cs1 from './img/cs-1.png';
import cs2 from './img/cs-2.png';

import { Link } from 'react-router-dom';

import './styles.css';

function Home() {
    return (
        <div>
            <div className="header">
                <Header title="Você pode fortalecer o Cores do Amanhã e, ao mesmo tempo, trazer mais arte para sua vida!">
                    <div className="button-area">
                        <Button title="Saiba como ajudar" path="/infos" />
                    </div>
                </Header>
            </div>
            <div className="pillars">
                <h4>O Cores do Amanhã é um grupo luta por dias mais dignos para a infância e juventude de Pernambuco, promovendo a transformação social e inclusão através da arte, cultura e esportes.</h4>
                <h2><strong>Nossos pilares</strong></h2>

                <div className="cards">
                    <div className="card card-1">
                        <img src={palette} alt="Paleta de pintura." />
                        <p>Transformação através da arte.</p>
                    </div>
                    <div className="card card-2">
                        <img src={paintbrush} alt="Pincel de pintura." />
                        <p>Valorização de diversas formas de expressão artísticas.</p>
                    </div>
                    <div className="card card-3">
                        <img src={music} alt="Símbolo musical." />
                        <p>Difundir o Hip Hop como um movimento cultural, político e social.</p>
                    </div>
                    <div className="card card-4">
                        <img src={heart} alt="Desenho de coração." />
                        <p>Amor ao próximo.</p>
                    </div>
                </div>
                <div className="button-area">
                    <Button path="/about" title="Saiba mais sobre nossa história" />
                </div>
            </div>
            <div className="projects-home">
                <div className="row">
                    <div>
                        <h3>Cores Femininas</h3>
                        <p>Esse projeto reúne várias artistas, que atuam dentro e fora do Hip Hop, em ações que tem como objetivo lutar pelos direitos, espaços e pelo fim dos diversos tipos de violências sofridas pelas mulheres.</p>
                        <div className="button-area">
                            <Button path="/" title="Conheça o Projeto"/>
                        </div>   
                    </div>
                    <div>
                        <img src={cf1} alt="teste" />
                    </div>
                    <div>
                        <img src={cf2} alt="teste" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img src={cs1} alt="teste" />
                    </div>
                    <div>
                        <img src={cs2} alt="teste" />
                    </div>
                    <div>
                        <h3>Cores Sonoras</h3>
                        <p>Esse projeto busca dar oportunidades aos adolescentes do bairro Totó através da construção de novos rumos através da música e da cultura popular brasileira.</p>
                        <div className="button-area">
                            <Button path="/" title="Conheça o Projeto"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-area">
                <h2>Quer conhecer mais detalhes da história do Cores? Assista ao vídeo abaixo! &#10084;</h2>
                <iframe title="Video sobre a ONG Cores do Amanhã" src="https://www.youtube.com/embed/bwYuAUSn8cM?start=35" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <div className="help">
                    <p>Precisamos da sua ajuda!</p>
                    <p>Faça sua doação ou <Link to="/infos">clique aqui</Link> para conhecer diversas formas de colaborar com o Cores!</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;
