import React from 'react';
import './styles.css';
import Navbar from '../Navbar';

function Header(props) {
    return (
        <header className="header">
            <Navbar />
            <div className="content">
                <h1> {props.title} </h1>
                {props.children}
            </div>
        </header>
    );
}

export default Header;