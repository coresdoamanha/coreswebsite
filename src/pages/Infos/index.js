import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import whatsapp from '../../assets/img/icons/whatsapp.svg';
import palette from './img/icons/palette.png';
import boxopen from './img/icons/box-open.png';
import paintbrush from './img/icons/paint-brush.png';
import handshelping from './img/icons/hands-helping.png';
import handheart from './img/icons/hand-holding-heart.png';
import qrcode from './img/como-ajudar_qr-code.png';

import artistas01 from './img/galeria-artistas01.png';
import artistas02 from './img/galeria-artistas02.png';
import artistas03 from './img/galeria-artistas03.png';
import artistas04 from './img/galeria-artistas04.png';
import artistas05 from './img/galeria-artistas05.png';
import artistas06 from './img/galeria-artistas06.png';
import artistas07 from './img/galeria-artistas07.png';

import artesanato01 from './img/galeria-artesanato01.png';
import artesanato02 from './img/galeria-artesanato02.png';
import artesanato03 from './img/galeria-artesanato03.png';
import artesanato04 from './img/galeria-artesanato04.png';
import artesanato05 from './img/galeria-artesanato05.png';
import artesanato06 from './img/galeria-artesanato06.png';
import artesanato07 from './img/galeria-artesanato07.png';

import voluntarios01 from './img/galeria-voluntarios01.png';
import voluntarios02 from './img/galeria-voluntarios02.png';
import voluntarios03 from './img/galeria-voluntarios03.png';
import voluntarios04 from './img/galeria-voluntarios04.png';
import voluntarios05 from './img/galeria-voluntarios05.png';
import voluntarios06 from './img/galeria-voluntarios06.png';
import voluntarios07 from './img/galeria-voluntarios07.png';
import voluntarios08 from './img/galeria-voluntarios08.png';

import caminho01 from './img/galeria-caminho01.png';
import caminho02 from './img/galeria-caminho02.png';
import caminho03 from './img/galeria-caminho03.png';
import caminho04 from './img/galeria-caminho04.png';
import caminho05 from './img/galeria-caminho05.png';
import caminho06 from './img/galeria-caminho06.png';
import caminho07 from './img/galeria-caminho07.png';
import caminho08 from './img/galeria-caminho08.png';

import img2 from './img/jouse-premio.png';

import './styles.css';

function Infos(){
    window.scrollTo(0, 0);
    return (
        <div className="infos">
            <div className="infosbg">
                <Header title="Você pode ajudar o Cores de várias formas" />
            </div>
            <div className="howtohelp">
                <p>Se interessou pelo Cores do Amanhã e deseja nos ajudar a impactar cada vez mais vidas e participar da nossa história? Há diversas formas que você pode fazer isso! Confira abaixo, toda ajuda é muito bem vinda!</p>

                <div className="helpcards">
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

                <h2>Algumas formas que você pode doar:</h2>

                <p>Toda doação feita é distribuída em nossos eventos e utilizadas nas ações e oficinas. Toda doação é bem vinda e pode trazer um sorriso para uma crianças ou a alegria para um lar. Entre em contato conosco e contribua!</p>
            </div>
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
                    <p>Doando roupas, alimentos, livros, brinquedos, ou qualquer material para as oficinas do Cores do Amanhã você estará contribuindo com a felicidade de muitas crianças da comunidade.</p>
                    <div>
                        <a className="button" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso ajudar a ONG com doações!">Clique aqui e fale conosco <img src={whatsapp} alt="Ícone do Whatsapp" /></a>
                    </div>
                </div>
            </div>
            <div className="infoimage" />
            <div className="help">
                <h2>Outras formas de ajudar</h2>
                <div className="crow orange">
                    <div className="carousel-c">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas01} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas02} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas03} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas04} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas05} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas06} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artistas07} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="text-content">
                        <h3>Contratando um de nossos artistas</h3>
                        <p>Precisando renovar algum espaço? Dar mais vida e alegria á alguma parede? A a arte tem esse poder! Contrate um de nossos artistas! Além de ter uma arte exclusiva sua, você vai estar ajudando o Cores do Amanhã. Nossos artistas fazem graffitis, aerografia e painéis e também desenhos que podem virar lindos quadros para você poder presentear você mesmo ou alguém querido. Se interessou? Entre em contato conosco para solicitar o seu trabalho!</p>
                        <div>
                            <Button title="Quero contratar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso contratar os serviços da ONG!"  />
                        </div>                       
                    </div>
                </div>
                <div className="crow red">
                    <div className="text-content">
                        <h3>Seja um parceiro fixo</h3>
                        <p>Deseja ser um parceiro fixo do Cores do Amanhã? Essa atitude nos ajuda a manter nosso espaço e as atividades que nele acontece, como festas, oficinas, estrutura básica, compra de materiais e lanches para as crianças que fazem parte das atividades do Cores. Como forma de agradecimento, colocamos a marca da sua empresa na Homepage do nosso site! Entre em contato conosco, sua contribuição é muito importante para continuarmos a fazer diferença na vida das pessoas da nossa comunidade.</p>
                        <div>
                            <Button title="Quero ser um parceiro" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso ser um parceiro fixo!"   />
                        </div>
                    </div>
                    <div className="carousel-c">
                        <img src={img2} alt="teste" />
                    </div>
                </div>
                <div className="crow green">
                    <div className="carousel-c">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios01} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios02} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios03} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios04} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios05} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios06} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios07} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={voluntarios08} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="text-content">
                        <h3>Seja um voluntário</h3>
                        <p>Você também pode nos ajudar sendo um de nossos voluntários! Você gosta de trabalhar com crianças, jovens e a comunidade em geral? Pode desenvolver uma atividade artística que seja voltada a cultura e cidadania? Aqui é o lugar certo! Toda ajuda é muito bem vinda e o trabalho voluntário é a base de nosso espaço, vamos juntos levar educação, lazer muita cultura para nossa comunidade!</p>
                        <div>
                            <Button title="Quero ser voluntário" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso me tornar parte dos voluntários!" />
                        </div>
                    </div>
                </div>
                <div className="crow yellow">
                    <div className="text-content">
                        <h3>Compre artesanato feito na comunidade</h3>
                        <p>Você também pode apoiar o Cores comprando artesanato feito pelos artistas da nossa comunidade. Bolsas, telas, camisetas, agendas.</p>
                        <div>
                            <Button title="Quero comprar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso adquirir os produtos de artesanato confeccionados pela ONG!" />
                        </div>
                    </div>
                    <div className="carousel-c">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato01} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato02} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato03} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato04} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato05} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato06} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={artesanato07} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="crow orange">
                <div className="carousel-c">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho01} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho02} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho03} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho04} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho05} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho06} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho07} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={caminho08} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="text-content">
                        <h3>Caminho das Cores</h3>
                        <p>Quer conhecer mais Recife, o Cores do Amanhã e nossa comunidade? Participe do Caminho das Cores! Através dessa iniciativa oferecemos visitas turísticas para conhecer os graffitis lindos da nossa região, o nosso bairro e o Cores!</p>
                        <div>
                            <Button title="Quero participar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Olá! Gostaria de mais informações sobre como posso participar do Caminho das Cores!" />
                        </div>                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Infos;