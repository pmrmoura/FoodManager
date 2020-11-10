import React from 'react';
import {useHistory} from 'react-router-dom';

import './AddProductPage.css';

export default function AddProductPage(){
    const history = useHistory();

    function handleTapGoBack(){
        history.push('/');
    }


    return(
        <div className = "product-wrapper">

            <header>
                <button onClick= {handleTapGoBack}>Voltar</button>
                <h2> Adicione um novo produto</h2>
                <button onClick = {handleTapGoBack}>Adicionar produto</button>
            </header>

            <form>
                <div className="label-input-wrapper">
                    <label for = "name">Nome</label>
                    <input type = "text" name = "name"  placeHolder = "Digite o nome do produto"required></input>
                </div>
                <div className="label-input-wrapper">
                    <label for = "cost">Custo</label>
                    <input type = "text" name = "cost"  placeHolder = "Digite o custo da produção do produto"required></input>
                </div>
                <div className="label-input-wrapper">
                    <label id = "preco-venda"for = "price">Preço de venda</label>
                    <input type = "text" name = "price"  placeHolder = "Digite por quanto você venderá o produto"required></input>
                </div>
            </form>
        </div>

    );
}