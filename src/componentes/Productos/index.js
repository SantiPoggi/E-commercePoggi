import React from 'react';
import IMG from '../../images/milk stout.jpeg';

export const ProductosLista = () => {
    
    return (
        <>
            <h1 className="title"> Productos</h1>
            <div className="productos">
                <div className="producto">    
                    <a href="q">
                        <div className="producto_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$250</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="w" className="">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">    
                    <a href="e">
                        <div className="producto_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$250</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="r" className="">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">    
                    <a href="t">
                        <div className="producto_img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$250</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">Añadir</button>
                        <div>
                            <a href="y" className="">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
            </div>        
        
        </>
    );
};