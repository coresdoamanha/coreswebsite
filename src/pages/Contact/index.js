import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Contact(){
    return (
        <div>
            <div className="contact">
                <Header title="Entre em contato conosco" />
            </div>
            
            <Footer></Footer>
        </div>
    );
}

export default Contact;