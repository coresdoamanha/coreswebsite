import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import facebook from '../../assets/img/icons/facebook.svg';
import youtube from '../../assets/img/icons/youtube.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import './styles.css';

function Social(){
    return (
        <div>
            <div className="social">
                <Header title="Conheça mais a história do Cores" />
            </div>
            <div className="videoarea">
                <h4>Ao longo da nossa caminhada tivemos oportunidades de contar nossa história em diversos veículos de mídia! Veja algumas reportagens que participamos:</h4>
                <iframe title="Video sobre a ONG Cores do Amanhã" src="https://www.youtube.com/embed/bwYuAUSn8cM?start=35" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="Video sobre a ONG Cores do Amanhã" src="https://www.youtube.com/embed/bwYuAUSn8cM?start=35" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title="Video sobre a ONG Cores do Amanhã" src="https://www.youtube.com/embed/bwYuAUSn8cM?start=35" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="imagearea">
                <img src={img1} alt="teste" />
                <img src={img2} alt="teste" />
                <img src={img3} alt="teste" />
            </div>
            <div className="socialmediaarea">
                <h3>Nos acompanhe nas redes sociais e fique por dentro de tudo que acontece por aqui!</h3>
                <div className="socialmedia">
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
            <Footer></Footer>
        </div>
    );
}

export default Social;