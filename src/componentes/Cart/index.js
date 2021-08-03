import React from 'react'
import Card from "../../images/extra stout.jpeg";

export const Cart = () => {
    return (
        <div className="carritos">
            <div className="carrito">   
                <div className="carrito_close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Tu carrito</h2>
                <div className="carrito_center">

                    <div className="carrito_item">
                        <img src={ Card } alt="" />
                        <div>
                            <h3>Manush</h3>
                            <p className="price">$345</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove_item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                
                </div>
                <div className="carrito_footer">
                    <h3>Total: $250 </h3>
                    <button className="btn">Pagar</button>
                </div>
            
            </div>
        </div>
    )
}
