import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './Footer.css';
import BoxProduct from '../BoxProduct/BoxProduct';


function Footer(props){
    const { restaurantData } = props;
    console.log(restaurantData, 'datafooter')
    const products = restaurantData?.products
    const[redirect, setRedirect] = useState('');

    function handleAddProduct(){
        setRedirect('/add-product')
    }
    
    if (redirect) {
        return(
            <Redirect to = {redirect}/>
        );
    }
    
    return(
        <div className = 'box-footer-wrapper'>
            <div className = 'top'>
                <h2>Produtos Cadastrados:</h2>
                <button id = 'register-button' onClick = {handleAddProduct}>Cadastrar Produto</button>
            </div>
            <div className = "box-footer-content">
                {products?.map((product) => (
                    <BoxProduct nomeProduto={product.name} idProduto={product._id} />
                ))}

                {products?.length === 0 && (
                    <center>
                        <h2>Nenhum produto cadastrado!</h2>
                    </center>
                )}
            </div>
        </div>
    );
}

export default Footer;