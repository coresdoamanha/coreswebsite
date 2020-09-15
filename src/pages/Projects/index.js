import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import img1 from './img/projetos_cores-femininas_1.png';
import img2 from './img/projetos_cores-femininas_2.png';
import img3 from './img/projetos_cores-sonoras_1.png';
import img4 from './img/projetos_cores-sonoras_2.png';
import img5 from './img/projetos_caminho-cores_1.png';
import img6 from './img/projetos_caminho-cores_2.png';

import galeria1 from './img/galeria1.png';
import galeria2 from './img/galeria2.png';
import galeria3 from './img/galeria3.png';
import galeria4 from './img/galeria4.png';
import galeria5 from './img/galeria5.png';
import galeria6 from './img/galeria6.png';
import galeria7 from './img/galeria7.png';
import galeria8 from './img/galeria8.png';

import './styles.css';

function Projects(){
    const atividades = ['Arte em Gesso', 'Estamparia', 'Graffitagem', 'Break – Dança de Rua', 'Ballet', 'Dança', 'Swingueira', 'Teatro', 'Danças', 'Folcloricas', 'Dança', 'Contemporânea', 'Informática', 'Mini-bilbioteca com rodas de leitura', 'Kung Fu', 'Desenho Básico e Artístico', 'Pintura Decorativa e Aquarela', 'Percussão', 'Aerografia – Arte em bolsas, camisas, parede...', 'Jogos e Recreação', 'Taekwondo', 'Desenho', 'Cartoon', '4 Elementos do Hip Hop', 'Dança Popular', 'Karatê', 'Jiu jitsu', 'Karatê', 'Capoeira', 'Arte', 'Yoga', 'Dança']
    return (
        <div className="projects">
            <div className="projectsbg">
                <Header title="Nossos projetos e atividades" />
            </div>
            <div className="activities">
                <p>O Cores do Amanhã realiza oficinas que buscam promover atividades socioassistenciais a crianças e jovens e suas famílias, que contribuam para a construção de novos conhecimentos, formação de atitudes e valores, desenvolvimento integral e fortalecimento dos vínculos através das artes, do lazer dos esportes e da inclusão através da cultura.</p>
                <p>Hoje o Espaço Cores do Amanhã é uma realidade na vida da comunidade do Totó, onde são promovidas atividades teóricas, práticas corporais, mostra de vídeos, leitura de textos, fotografia, relaxamento corporal, atividades externas, intercâmbios com outros grupos de convivência dentro e fora da instituição, competições esportivas, exposições, produções de eventos na comunidade, entre outras. Confira algumas das nossas atividades:</p>
                
                <ul>
                    { atividades.map((atividade) => {
                        return (
                            <li>{atividade}</li>
                        );
                    })}
                </ul>
                
                <p>Duas vezes por ano nós abrimos as inscrições para novas turmas de cada atividade! Para inscrição, a família precisa ir até nossa sede!</p>
            </div>
            <div className="projectscolors" >
                <h2>Além dessas atividades na comunidade, temos ainda outros projetos:</h2>
                <div className="projgrid">
                    <div className="text">
                        <h3>Cores Femininas</h3>
                        <p>O Grupo Cores Femininas foi fundado em 2009 e é formado por um grupo de mulheres que usam a arte para expressar a cultura e educação através das artes e do Hip Hop, enaltecendo a mulher como protagonista em ações importantes para a sociedade.</p>
                        <p>O Grupo tem como coordenadora a grafiteira Jouse Barata, que reúne várias artistas, dentro e fora do Hip Hop, em ações buscando lutar pelos direitos, espaços e pelo fim dos diversos tipos de violências sofridas pelas mulheres. Utilizando a arte educação como fortalecimento, o Grupo vem promove oficinas, eventos e encontros que proporcionem o protagonismo feminino, incentivem a troca cultural, geração de renda e o diálogo sobre a luta dos direitos da mulher.</p>
                        <p>Saiba mais sobre o projeto: www.grupocoresfemininas.blogspot.com</p>
                        <p>grupocoresfeminias@gmail.com</p>
                        <p>Informações: 81.8876.3593</p>
                    </div>
                    <div className="image">
                        <img src={img1} alt="teste" />
                        <img src={img2} alt="teste" />
                    </div>
                </div>
                <div className="projgrid">
                    <div className="text">
                        <h3>Cores Sonoras</h3>
                        <p>O Projeto Cores Sonoras é fruto da Oficina de percussão ministrada pelo educador voluntário Reginaldo Francisco. Ele nasceu em 2009, com o intuito de levar inclusão social através da arte e a cultura popular de Pernambuco para jovens de periferia.</p>
                        <p>Nos ensaios do Cores Sonoras os jovens participantes estudam ritmos da cultura local e nacional, entre eles: côco de roda, samba reggae, samba de roda, afoxé, afro, maculelê, ijexá, maracatu, mangue beat, ciranda, hip hop, forró, entre outros.</p>
                        <p>Esse trabalho busca dar oportunidades aos adolescentes do bairro, incentivando a geração de renda e a formação cidadã, construindo novos rumos através da música e da cultura popular brasileira.</p>
                        <p>Saiba mais sobre o projeto: movimentoculturalcoresdoamanha@gmail.com Fone: 98876.3593/98313.4063</p>
                    </div>
                    <div className="image">
                        <img src={img3} alt="teste" />
                        <img src={img4} alt="teste" />
                    </div>
                </div>
                <div className="projgrid">
                    <div className="text">
                        <h3>Caminho das Cores</h3>
                        <p>Participe do Caminho das Cores! Através dessa iniciativa oferecemos visitas turísticas para conhecer os graffitis lindos da nossa região, o nosso bairro e a sede do Cores!</p>
                    </div>
                    <div className="image">
                        <img src={img5} alt="teste" />
                        <img src={img6} alt="teste" />
                    </div>
                </div>
            </div>
            <div className="day">
                <h2>Veja como é nosso dia a dia:</h2>
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
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Projects;