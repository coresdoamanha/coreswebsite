import React from 'react';
import { Link } from 'react-router-dom';
import logoCores from '../../assets/img/logocores2x.png';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import bars from '../../assets/img/icons/bars.svg';
import './styles.css';

function Navbar(){
    return(
        <nav className="navigation">
            <div className="logocolumn">
                <Link to="/">
                    <img src={logoCores} alt="Logo da ONG Cores do Amanhã. Arco-íris colorido com a frase Cores do Amanhã embaixo." />
                </Link>
            </div>
            <div className="pagecolumn">
                <Link to="/sobre-nos">Sobre nós</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/como-ajudar">Como ajudar</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/na-media">Na mídia</Link>
            </div>
            <div className="smcolumn">
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
            <div className="menubar">
                <div className="menuicon">
                    <img src={bars} alt="Ícone de MenuBar"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;