import React from 'react';
import IMG from '../../images/milk stout.jpeg';

export const ProductosLista = () => {
    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="productos">
               <a href="/">
                    <div className="producto">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="producto_footer">
                    <h1> Milk Stout </h1>
                    <p> Manush </p>
                    <p className="price">$250</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                        Agregar al carro
                    </button>
                    <div>
                        <a href="b" className="btn"> Vista </a>
                    </div>
                </div>
            </div>
        </>
    )     
}