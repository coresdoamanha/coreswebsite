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
                <Header title="Voc?? pode ajudar o Cores de v??rias formas" />
            </div>
            <div className="howtohelp">
                <p>Se interessou pelo Cores do Amanh?? e deseja nos ajudar a impactar cada vez mais vidas e participar da nossa hist??ria? H?? diversas formas que voc?? pode fazer isso! Confira abaixo, toda ajuda ?? muito bem vinda!</p>

                <div className="helpcards">
                    <div className="boxopen">
                        <img src={boxopen} alt="teste" />
                        <p>Doa????es</p>
                    </div>
                    <div className="handshelping">
                        <img src={handshelping} alt="teste" />
                        <p>Sendo um parceiro</p>
                    </div>
                    <div className="handheart">
                        <img src={handheart} alt="teste" />
                        <p>Sendo volunt??rio</p>
                    </div>
                    <div className="paintbrush">
                        <img src={paintbrush} alt="teste" />
                        <p>Fortale??a a arte e artesanato</p>
                    </div>
                    <div className="palette">
                        <img src={palette} alt="teste" />
                        <p>Caminho das Cores</p>
                    </div>
                </div>

                <h2>Algumas formas que voc?? pode doar:</h2>

                <p>Toda doa????o feita ?? distribu??da em nossos eventos e utilizadas nas a????es e oficinas. Toda doa????o ?? bem vinda e pode trazer um sorriso para uma crian??as ou a alegria para um lar. Entre em contato conosco e contribua!</p>
            </div>
            <div className="donation">
                <div className="element">
                    <div>
                        <p>Fa??a sua doa????o:</p>
                        <p>Banco do Brasil</p>
                        <p>Ag??ncia: 4118-1</p>
                        <p>CC: 20.766-7</p>
                    </div>
                </div>
                <div className="element">
                    <p>Voc?? tamb??m pode fazer sua doa????o atrav??s do QR Code:</p>
                    <img src={qrcode} alt="QRCode da conta banc??ria para doa????es." />
                </div>
                <div className="element">
                    <p>Doando roupas, alimentos, livros, brinquedos, ou qualquer material para as oficinas do Cores do Amanh?? voc?? estar?? contribuindo com a felicidade de muitas crian??as da comunidade.</p>
                    <div>
                        <a className="button" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso ajudar a ONG com doa????es!">Clique aqui e fale conosco <img src={whatsapp} alt="??cone do Whatsapp" /></a>
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
                        <p>Precisando renovar algum espa??o? Dar mais vida e alegria ?? alguma parede? A a arte tem esse poder! Contrate um de nossos artistas! Al??m de ter uma arte exclusiva sua, voc?? vai estar ajudando o Cores do Amanh??. Nossos artistas fazem graffitis, aerografia e pain??is e tamb??m desenhos que podem virar lindos quadros para voc?? poder presentear voc?? mesmo ou algu??m querido. Se interessou? Entre em contato conosco para solicitar o seu trabalho!</p>
                        <div>
                            <Button title="Quero contratar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso contratar os servi??os da ONG!"  />
                        </div>                       
                    </div>
                </div>
                <div className="crow red">
                    <div className="text-content">
                        <h3>Seja um parceiro fixo</h3>
                        <p>Deseja ser um parceiro fixo do Cores do Amanh??? Essa atitude nos ajuda a manter nosso espa??o e as atividades que nele acontece, como festas, oficinas, estrutura b??sica, compra de materiais e lanches para as crian??as que fazem parte das atividades do Cores. Como forma de agradecimento, colocamos a marca da sua empresa na Homepage do nosso site! Entre em contato conosco, sua contribui????o ?? muito importante para continuarmos a fazer diferen??a na vida das pessoas da nossa comunidade.</p>
                        <div>
                            <Button title="Quero ser um parceiro" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso ser um parceiro fixo!"   />
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
                        <h3>Seja um volunt??rio</h3>
                        <p>Voc?? tamb??m pode nos ajudar sendo um de nossos volunt??rios! Voc?? gosta de trabalhar com crian??as, jovens e a comunidade em geral? Pode desenvolver uma atividade art??stica que seja voltada a cultura e cidadania? Aqui ?? o lugar certo! Toda ajuda ?? muito bem vinda e o trabalho volunt??rio ?? a base de nosso espa??o, vamos juntos levar educa????o, lazer muita cultura para nossa comunidade!</p>
                        <div>
                            <Button title="Quero ser volunt??rio" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso me tornar parte dos volunt??rios!" />
                        </div>
                    </div>
                </div>
                <div className="crow yellow">
                    <div className="text-content">
                        <h3>Compre artesanato feito na comunidade</h3>
                        <p>Voc?? tamb??m pode apoiar o Cores comprando artesanato feito pelos artistas da nossa comunidade. Bolsas, telas, camisetas, agendas.</p>
                        <div>
                            <Button title="Quero comprar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso adquirir os produtos de artesanato confeccionados pela ONG!" />
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
                        <p>Quer conhecer mais Recife, o Cores do Amanh?? e nossa comunidade? Participe do Caminho das Cores! Atrav??s dessa iniciativa oferecemos visitas tur??sticas para conhecer os graffitis lindos da nossa regi??o, o nosso bairro e o Cores!</p>
                        <div>
                            <Button title="Quero participar" href="https://api.whatsapp.com/send?phone=5581988763593&text=Ol??! Gostaria de mais informa????es sobre como posso participar do Caminho das Cores!" />
                        </div>                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Infos;