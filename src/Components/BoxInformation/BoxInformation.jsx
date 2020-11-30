import React from 'react';
import "./BoxInformation.css";

function BoxInformation(props) {
    const { restaurantData } = props;
    const products = restaurantData?.products
    return (
        <div className="box-information-wrapper">
            <header>
                <h3>Margem de lucro por produto</h3>
            </header>
            <p id="profit-product"> Margem de lucro/produto</p>
            <div className="product-information">
                {products?.map((product) => (
                    <div className="product">
                        <h3>{product.name}</h3>
                        <p id="first-percentage"> {(product.profitMargin * 100) - 100}%</p>
                    </div>
                ))}
                <center>
                    {products?.length === 0 && (
                        <h2>Nenhum produto cadastrado!</h2>
                    )}
                </center>

            </div>
        </div>
    );
}

export default BoxInformation;
