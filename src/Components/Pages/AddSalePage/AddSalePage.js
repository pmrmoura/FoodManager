import React from 'react';
import {useHistory} from 'react-router-dom';
import './AddSalePage.css';

export default function AddSalePage(){
    const history = useHistory();

    function handleTapComeBack(){
        history.push('/'); 
    }

    return(
        <div className = "sale-wrapper">

            <header>
                <button onClick = {handleTapComeBack} >Voltar</button>
                <h2>Adicione nova venda</h2>
                <button onClick = {handleTapComeBack}>Adicione uma venda</button> 
            </header> 

            <form>
                <div className="label-input-wrapper">
                    <label for = "name">Nome</label>
                    <input type = "text" name = "name"  placeholder = "Digite o nome do produto"required></input>
                </div>

                <div className="label-input-wrapper">
                    <label  id = "label-quantidade" for = "quantity">Quantidade</label>
                    <input type = "text" name = "quantity"  placeholder = "Digite a quantidade" required ></input>
                </div>
            </form>

        </div>
    );
}