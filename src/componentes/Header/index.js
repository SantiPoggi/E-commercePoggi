import React from 'react'
import Logo  from "../../images/logo.jpeg";

export const Header = () => {
    return (
        <header>
            <a href="r"> 
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="f">INICIO</a>
                </li>
                <li>
                    <a href="v">PRODCTOS</a>
                </li>
            </ul>
            <div>
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
    
        
        </header>
    )
}

