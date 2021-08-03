import React from 'react'
import Logo  from "../../images/logo.jpeg";

export const Header = () => {
    return (
        <header>
            <a href="/"> 
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="/">INICIO</a>
                </li>
                <li>
                    <a href="/productos">PRODUCTOS</a>
                </li>
            </ul>
            <div>
                <a href="/carrito">
                    <box-icon name="cart"></box-icon>
                    <span className="item__total">0</span>
                </a>
            </div>
    
        
        </header>
    )
}

