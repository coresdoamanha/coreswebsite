import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import img1 from './img/gallerysm01.png';
import img2 from './img/gallerysm02.png';
import img3 from './img/gallerysm03.png';
import img4 from './img/gallerysm04.png';
import img5 from './img/gallerysm05.png';
import img6 from './img/gallerysm06.png';
import img7 from './img/gallerysm07.png';
import img8 from './img/gallerysm08.png';
import img9 from './img/gallerysm09.png';
import img10 from './img/gallerysm10.png';
import './styles.css';

function Social(){
    return (
        <div className="social">
            <div className="socialbg">
                <Header title="Conheça mais a história do Cores" />
            </div>
            <div className="video">
                <p>Ao longo da nossa caminhada tivemos oportunidades de contar nossa história em diversos veículos de mídia! Veja algumas reportagens que participamos:</p>
            </div>
            <div className="images">
                <div>
                    <img src={img1} alt="teste" />
                    <img src={img2} alt="teste" />
                    <img src={img3} alt="teste" />
                    <img src={img4} alt="teste" />
                </div>
                <div>                    
                    <img src={img5} alt="teste" />
                    <img src={img6} alt="teste" />
                    <img src={img7} alt="teste" />
                    <img src={img8} alt="teste" />
                </div>
                <div>
                    <img src={img9} alt="teste" />
                    <img src={img10} alt="teste" />
                </div>
            </div>
            <div className="socialm">
                <h1>Nos acompanhe nas redes sociais e fique por dentro de tudo que acontece por aqui!</h1>
                <div className="smicons">
                    <a href="https://www.instagram.com/coresdoamanha/">
                        <img src={instagram} alt="Logo da rede social Instagram" />
                    </a>
                    <a href="https://www.youtube.com/user/coresdoamanha">
                        <img src={youtube} alt="Logo da rede social Youtube" />
                    </a>
                    <a href="https://www.facebook.com/ongcoresdoamanha/">
                        <img src={facebook} alt="Logo da rede social Facebook" />
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Social;