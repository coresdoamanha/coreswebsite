import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import palette from '../../assets/img/icons/palette.svg';
import heart from '../../assets/img/icons/heart.svg';
import paintbrush from '../../assets/img/icons/paint-brush.svg';
import music from '../../assets/img/icons/music.svg';
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
            <Footer></Footer>
        </div>
    );
}

export default Home;