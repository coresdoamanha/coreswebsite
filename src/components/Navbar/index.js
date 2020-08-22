import React from 'react';
import { Link } from 'react-router-dom';
import logoCores from '../../assets/img/logo.png';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import './styles.css';

function Navbar(){
    return(
        <nav>
            <div className="logo-area">
                <Link to="/">
                    <img src={logoCores} alt="Logo da ONG Cores do Amanhã. Arco-íris colorido com a frase Cores do Amanhã embaixo." />
                </Link>
            </div>
            <div className="nav-area">
                <Link to="about">Sobre nós</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="infos">Como ajudar</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/social">Na mídia</Link>
            </div>
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
        </nav>
    );
}

export default Navbar;