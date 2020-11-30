import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../../services/api';

import './AddProductPage.css';

export default function AddProductPage(){
    const [nome, setNome] = useState('');
    const [cost, setCost] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [cookies, setCookies] = useState({});
    const history = useHistory();

    useEffect(() => {
        let currentCookies = document.cookie;
        let object_cookies = JSON.parse(currentCookies);
        setCookies(object_cookies);
    })

    function handleSubmitPressed(event){
        event.preventDefault();
        API.post('api/product', {
            name : nome,
            cost: cost,
            sellPrice: sellPrice
        }).then((response) => {
            console.log(response);
            redirecting();
        }).catch((error) => {
            console.log(error);
        })
    }

    function redirecting(){
        const {id} = cookies;
        const domain = `/restaurante/${id}`;
        history.push(domain);

    }

    return(
        <div className = "product-wrapper">

            <header>
                <button onClick= {redirecting}>Voltar</button>
                <h2> Adicione um novo produto</h2>
                <button type = "submit">Adicionar produto</button>
            </header>

            <form onSubmit = { (event) => {
                handleSubmitPressed(event);
            }}>
                <div className="label-input-wrapper">
                    <label for = "name">Nome</label>
                    <input type = "text" name = "name"  placeHolder = "Digite o nome do produto"required onChange = {
                        (event) => {
                            const {value} = event.target;
                            setNome(value);
                        }
                    } ></input>
                </div>
                <div className="label-input-wrapper">
                    <label for = "cost">Custo</label>
                    <input type = "text" name = "cost"  placeHolder = "Digite o custo da produção do produto"required onChange = {
                        (event) => {
                            const {value} = event.target;
                            value = parseFloat(value);
                            setCost(value);
                        }
                    }></input>
                </div>
                <div className="label-input-wrapper">
                    <label id = "preco-venda"for = "price">Preço de venda</label>
                    <input type = "text" name = "price"  placeHolder = "Digite por quanto você venderá o produto"required onChange = {
                        (event) => {
                            const {value} = event.target;
                            value = parseFloat(value);
                            setSellPrice(value);
                        }
                    }></input>
                </div>
            </form>
        </div>

    );
}