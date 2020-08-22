import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Button(props){
    return (
        <Link to={props.path} className="button">
            {props.title}
        </Link>
    );
}

export default Button;