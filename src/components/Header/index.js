import React from 'react';
import './Header.css'

//function HEader ({titulo})

function Header (props){
    return(
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}

export default Header;