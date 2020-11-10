import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import MainPage from './Components/Pages/MainPage/MainPage';
import AddSalePage from './Components/Pages/AddSalePage/AddSalePage';
import AddProductPage from './Components/Pages/AddProductPage/AddProductPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path = '/' exact component = {MainPage} /> 
            <Route path = '/add-sale' component = {AddSalePage} />
            <Route path = '/add-product' component = {AddProductPage} /> 
        </BrowserRouter>
    ); 
}