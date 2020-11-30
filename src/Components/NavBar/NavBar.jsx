import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './NavBar.css';


export default function NavBar({ gerente }) {
    const [cookie, setCookie] = useCookies()
    const[redirect, setRedirect] = useState('');

    function handleLogOut() {
        setCookie('token', null)
        setRedirect('/')
    }

    if (redirect) {
        return(
            <Redirect to = {redirect}/>
        );
    }
    return (
        <div className="navbar-wrapper">
            <h2> FOOD MANAGER </h2>
            <div className="right-content-navbar">
                <h3>BEM VINDO, {gerente}</h3>
                <p onClick={handleLogOut}>Sair</p>
            </div>
        </div>
    );
}