import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './Updates.css'; 
import BoxUpdates from '../BoxUpdates/BoxUpdates';
import '../Button/Button.css'

export default function Updates(){
    const [redirect, setRedirect] = useState('');

    function handleTapAddSale(){
        setRedirect('/add-sale');
    }

    if(redirect){
        return(
            <Redirect to = {redirect} />
        );
    }

    return(
        <div className = 'updates-wrapped'>

            <button id = 'register-button' onClick = {handleTapAddSale} >Adicionar Venda</button>
 
            <div className = 'update-boxes'>
            <BoxUpdates title = "Produtos" content = "16%" />
            <BoxUpdates title = "Produtos" content = "16%" />
            <BoxUpdates title = "Produtos" content = "16%" />
            <BoxUpdates title = "Produtos" content = "16%" />
            </div>
        </div>
    );
}