import React from 'react';
import './BoxProduct.css';

function BoxProduct({image, nomeProduto}) {
    return (
        <div className = "box-product-wrapper">
            <img src={image}/>
            <div className = "box-product-content">
                <p id = "name-product">{nomeProduto}</p>
                <p id="details"> Clique para detalhes</p>
            </div>
        </div>
    );
}

export default BoxProduct;
