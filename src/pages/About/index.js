import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';
import premio1 from './img/premio1.png';
import premio2 from './img/premio2.png';
import galeria1 from './img/galeria1.png';
import galeria2 from './img/galeria2.png';
import galeria3 from './img/galeria3.png';
import galeria4 from './img/galeria4.png';
import galeria5 from './img/galeria5.png';
import galeria6 from './img/galeria6.png';
import galeria7 from './img/galeria7.png';
import galeria8 from './img/galeria8.png';
import './styles.css';

function About(){
    window.scrollTo(0, 0);
    const premios = ['2009 - Ganhador do Edital Dagente – Escola de Artes e Tecnologia OI KABUM! | Com o prêmio gravamos o documentário CORES DA RUA, que conta nossa história.', '2010 - Ganhadores do Prêmio Preto Ghoéz de Hip Hop – Edital promovido pelo Governo Federal (MINC) | Com o prêmio conseguimos comprar uma Kombi.', '2011 - Ganhadores do Concurso Cultural promovido pela Listerine J&J | O prêmio foi uma casa na comunidade do Totó onde montamos o Espaço Cultural Cores do Amanhã).', '2013 - Melhor instituição do Ano de Pernambuco CUFA - Central única das Favelas e Ganhadores do Troféu ANU Dourado', '2014 - Vencedores do Prêmio Nacional representando Pernambuco - Inovação da visão mundial', '2014/2015 - Prêmio Cultura Hip Hop - FUNARTE - GOVERNO FEDERAL', '2018 - Edital Negras Potências - Apoiado pela Coca Cola e Fundo Baobá', '2019 - Prêmio Mulheres que mudaram a História de Pernambuco', '2019 - Prêmio Bem Maior. Com o prêmio conseguimos ampliar o Espaço cultural do Cores.', '2019 - IRME - Multiplicadora da Rede de Mulheres Empreendedoras com apoio da Google', '2019 - Homenageada pela Governadora em Exercício do Estado de Pernambuco (Luciana Santos) com o Diploma – Medalha Solano Trindade 2019, por Exercer a função Pública relevante na Política Estadual de Promoção da Igualdade Racial.'];
    return (
        <div className="about">
            <div className="aboutbg">
                <Header title="Nossa história!" />
            </div>
            <div className="history">
                <p>O Movimento Social e Cultural Cores do Amanhã é uma associação Civil, com caráter filantrópico social cultural, educacional e sem fins lucrativos, que iniciou suas atividades no dia 30 de Março de 2009, por iniciativa de Adelson Boris, Florim, Luther e Jouse Barata, um grupo de jovens grafiteiros que antes já atuavam pela da Comunidade do Totó em diversas ações coletivas e individuais. Vendo que a comunidade necessitava de atendimentos básicos ligados a ações sociais e educativas, resolveram se juntar e fortalecer o atendimento às crianças e jovens da região de forma mais inclusiva e ocupacional através das artes de rua.</p>
                <p>O grupo deu início às atividades com o apoio de Dona Maria de Lourdes, que cedeu seu terraço para serem realizadas oficinas culturais (graffiti) e outras atividades que tinham o objetivo de oferecer qualidade de vida aos moradores que vivem ao lado do Complexo prisional Aníbal Bruno.</p>
                <p>Hoje o Cores do Amanhã, como é mais conhecido, é uma associação sem fins lucrativos, um grupo comunitário formado por educadores, esportistas e artistas de diversas áreas que buscam levar cultura e cidadania através das artes, dos esportes e do Hip Hop. Atuamos a mais de 10 anos na Comunidade do Totó totalmente através do trabalho voluntário, doações e do trabalho de graffitagem, atendendo crianças, adolescentes, jovens, mulheres e famílias com de mais de 20 oficinas gratuitas.</p>
                <p>O Espaço Cultural funciona na Rua Garota de Ipanema 02, no Bairro do Totó. Atendemos mais de 650 famílias de forma fixa em oficinas culturais e esportivas diversas como: Ballet, Yoga, artesanato, crochê, pintura, percussão, dança popular, zumba, graffiti, karatê, jiu jitsu, capoeira, desenho, entre outras.</p>
                <p>O Cores promove diversas ações que buscam levar cultura e cidadania para as crianças, jovens e adultos da comunidade, envolvendo também as famílias da comunidade em atividades que mostrem a importância de temas como sustentabilidade e que fomentem a geração de renda familiar.</p>
                <p>O Grupo está registrado em Cartório com o CNPJ. 13.449.687.0001-99 nos termos da legislação em vigor, com prazo e duração indeterminado, podendo reivindicar junto aos órgãos públicos os interesses das crianças, adolescentes, jovens e da sociedade como um todo. Participar de eventos culturais ligados a cultura regional, Hip hop, entre outras expressões artísticas do nosso país, bem como manter convênios com órgãos ou instituições públicas, privadas, congêneres e organizações internacionais, constituídas por ilimitado número de associados. Sem cunho político ou partidário, com finalidade de atender a todos que a ela se dirigirem, independente de classe social, nacionalidade, sexo, raça, cor ou crença religiosa.</p>
                <p>Buscamos sempre levar cultura e cidadania através de uma ferramenta muito poderosa e transformadora: a arte de rua!</p>
            </div>
            <div className="mission">
                <div className="mrow">
                    <div>
                        <h3><strong>Missão</strong></h3>
                        <p>Esse projeto reúne várias artistas, que atuam dentro e fora do Hip Hop, em ações que tem como objetivo lutar pelos direitos, espaços e pelo fim dos diversos tipos de violências sofridas pelas mulheres.</p>   
                    </div>
                    <div>
                        <img src={img1} alt="teste" />
                    </div>
                    <div>
                        <img src={img2} alt="teste" />
                    </div>
                </div>
                <div className="mrow">
                    <div>
                        <img src={img3} alt="teste" />
                    </div>
                    <div>
                        <img src={img4} alt="teste" />
                    </div>
                    <div>
                        <h3><strong>Visão</strong></h3>
                        <p>Esse projeto busca dar oportunidades aos adolescentes do bairro Totó através da construção de novos rumos através da música e da cultura popular brasileira.</p>
                    </div>
                </div>
                <div className="mrow">
                    <div>
                    <h3><strong>Valores</strong></h3>
                        <p>Esse projeto busca dar oportunidades aos adolescentes do bairro Totó através da construção de novos rumos através da música e da cultura popular brasileira.</p>
                    </div>
                    <div>
                        <img src={img5} alt="teste" />
                    </div>
                    <div>
                        <img src={img6} alt="teste" />    
                    </div>
                </div>
            </div>
            <div className="team">
                <h3>Nossa equipe</h3>
                <p>O grupo Cores do Amanhã é formado por artistas plásticos, grafiteiros, BBoys, MC’s, Dj’s , artesãos, músicos, fotógrafos, arte-educadores entre outros artistas. Todos trabalhando juntos, com o objetivo de levar cultura e cidadania através da artes, dos esportes e do Hip Hop para o Estado de Pernambuco.</p>
                <div className="teambg">
                    <div className="teambutton">
                        <Button title="Saiba como você pode ajudar" path="/infos" />
                    </div>
                </div>
            </div>
            <div className="awards">
                <h3>Alguns prêmios que ganhamos</h3>
                <div className="acontent">
                    <div>
                        <ul>
                            { premios.map((premio) => {
                                return (<li> {premio} </li>)
                            }) }
                        </ul>
                    </div>
                    <div className="imgcontent">
                        <img src={premio1} alt="Kombi" />
                        <img src={premio2} alt="Jouse Barata" />
                    </div>
                </div>
                <h3>Mas o maior prêmio é ajudar todas essas pessoas</h3>
                <div className="gallery">
                    <div className="first">
                        <img src={galeria1} alt="teste" />
                        <img src={galeria2} alt="teste" />
                    </div>
                    <div className="second">
                        <img src={galeria3} alt="teste" />
                        <img src={galeria4} alt="teste" />
                    </div>
                    <div className="third">
                        <div>
                            <img src={galeria5} alt="teste" />
                        </div>
                        <div className="fourth">
                            <img src={galeria6} alt="teste" />
                            <img src={galeria7} alt="teste" />
                        </div>
                        <div>
                            <img src={galeria8} alt="teste" />
                        </div>
                    </div>
                </div>
                <div className="abutton">
                    <Button title="Faça parte da nossa história" path="/infos" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;