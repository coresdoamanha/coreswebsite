import React from 'react';
import { Link } from 'react-router-dom';
import logoCores from '../../assets/img/logo.png';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import './styles.css';

function Footer(){
    return (
        <footer>
            <div className="grid-area">
                <div className="logo-area">
                    <Link to="/">
                        <img src={logoCores} alt="Logo da ONG Cores do Amanhã. Arco-íris colorido com a frase Cores do Amanhã embaixo." />
                    </Link>
                </div>
                <div className="pages-area">
                    <p><strong>Links rápidos</strong></p>
                    <Link to="/about">Sobre nós</Link>
                    <Link to="/projects">Projetos</Link>
                </div>
                <div className="media-area">
                    <Link to="/contact">Contato</Link>
                    <Link to="/infos">Como ajudar</Link>
                    <div className="social-area">
                        <a href="https://www.instagram.com/coresdoamanha/">
                            <img src={instagram} alt="Logo da rede social Instagram" />
                        </a>
                        <a href="https://www.facebook.com/ongcoresdoamanha/">
                            <img src={facebook} alt="Logo da rede social Facebook" />
                        </a>
                        <a href="https://www.youtube.com/user/coresdoamanha">
                            <img src={youtube} alt="Logo da rede social Youtube" />
                        </a>
                    </div>
                </div>
                <div className="account-area">
                    <p>Faça sua doação</p>
                    <p>Banco do Brasil</p>
                    <p>Agência 4118-1</p>
                    <p>CC 20766-7</p>
                </div>
                <div className="address-area">
                    <p><strong>Espaço Cultural Cores do Amanhã</strong></p>
                    <p>Av. Garota de Ipanema Box - 02/03</p>
                    <p>Jardim Planalto, Totó - Recife</p>
                    <p>movimentoculturalcoresdoamanha@gmail.com</p>
                    <p>coresdoamanha2019@gmail.com</p>
                    <p>(81) 98876-3593 / 99678-1217</p>
                </div>
            </div>
            <div className="dev-area">
                <p>Desenvolvido com &#10084; por Amanda Maluf e Thays Resende Achucarro sob a supervisão e coordenação da Instituição Invenção Z.</p>
            </div>
        </footer>
    );
}

export default Footer;