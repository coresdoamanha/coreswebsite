import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Infos(){
    return (
        <div>
            <div className="infos">
                <Header title="Você pode ajudar o Cores de várias formas" />
            </div>
            <div> conteudo </div>
            <Footer></Footer>
        </div>
    );
}

export default Infos;