import React from 'react';
import { Link } from 'react-router-dom';
import logoCores from '../../assets/img/logocores2x.png';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import './styles.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="footergrid">
                <div className="logo">
                    <Link to="/">
                        <img src={logoCores} alt="Logo da ONG Cores do Amanhã. Arco-íris colorido com a frase Cores do Amanhã embaixo." />
                    </Link>
                </div>
                <div className="pages">
                    <p><strong>Links rápidos</strong></p>
                    <Link to="/sobre-nos">Sobre nós</Link>
                    <Link to="/projetos">Projetos</Link>
                </div>
                <div className="sm">
                    <Link to="/contato">Contato</Link>
                    <Link to="/sobre-nos">Como ajudar</Link>
                    <div className="sma">
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
                <div className="account">
                    <p>Faça sua doação</p>
                    <p>Banco do Brasil</p>
                    <p>Agência 4118-1</p>
                    <p>CC 20766-7</p>
                </div>
                <div className="address">
                    <p><strong>Espaço Cultural Cores do Amanhã</strong></p>
                    <p>Av. Garota de Ipanema Box - 02/03</p>
                    <p>Jardim Planalto, Totó - Recife</p>
                    <p>movimentoculturalcoresdoamanha@gmail.com</p>
                    <p>coresdoamanha2019@gmail.com</p>
                    <p>(81) 98876-3593 / 99678-1217</p>
                </div>
            </div>
            <div className="infodev">
                <p>Desenvolvido com &#10084; por Amanda Maluf e Thays Resende Achucarro sob a supervisão e coordenação da Instituição Invenção Z.</p>
            </div>
        </footer>
    );
}

export default Footer;