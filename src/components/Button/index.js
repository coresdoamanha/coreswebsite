import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Button(props){
    console.log(props)
    if(props.path != null){
        return (
            <Link to={props.path} className="button">
                {props.title}
            </Link>
        );
    }
    else {
        return (
            <a href={props.href} className="button">
                {props.title}
            </a>
        );
    }
}

export default Button;