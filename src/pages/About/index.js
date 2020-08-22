import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function About(){
    return (
        <div>
            <div className="about">
                <Header title="Nossa história!" />
            </div>
            <div> conteudo </div>
            <Footer></Footer>
        </div>
    );
}

export default About;