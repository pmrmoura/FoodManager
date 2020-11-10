import React from 'react';
import './NavBar.css';


export default function NavBar({ gerente }) {
    return (
        <div className="navbar-wrapper">
            <h2> FOOD MANAGER </h2>
            <div className="right-content-navbar">
                <h3>BEM VINDO, {gerente}</h3>
                <p>Sair</p>
            </div>
        </div>
    );
}