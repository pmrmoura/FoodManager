import React from 'react';
import "./BoxInformation.css";

function BoxInformation({ porcentagem, info }) {
    return (
        <div className="box-information-wrapper">
            <header>
                <h3>Margem de lucro por produto</h3>
                <p id="see-more" > Ver mais </p>
            </header>
            <p id="profit-product"> Margem de lucro/produto</p>
            <div className="product-information">
                <div className="product">
                    <h3>{info}</h3>
                    <p  id = "first-percentage"> {porcentagem}</p>
                </div>

                <div className="product">
                    <h3>{info}</h3>
                    <p  id = "second-percentage"> {porcentagem}</p>
                </div>

                <div className="product">
                    <h3>{info}</h3>
                    <p id="third-percentage"> {porcentagem}</p>
                </div>

                <div className="product">
                    <h3>{info}</h3>
                    <p id="fourth-percentage"> {porcentagem}</p>
                </div>
            </div>
        </div>
    );
}

export default BoxInformation;
