import React, { useEffect, useState } from 'react';
import API from '../../../services/api';

import BoxInformation from '../../BoxInformation/BoxInformation';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import Updates from '../../Updates/Updates';

import './MainPage.css';

function MainPage() {
  const [cookies, setCookies] = useState({}); // aqui já tem o email e a senha 
  const [products, setProducts ] = useState([]);

  useEffect(() => {
    loadInfo();
    const {id} = cookies;
    const domain = `api/restaurant/${id}`;
    API.get(domain).then((response) => {
       const { products } = response;
       setProducts(products);
    }).catch((error) => {
      console.log(error);
    })
  })

  function loadInfo(){
    let currentCookies = document.cookie;
    let object_cookies = JSON.parse(currentCookies);
    setCookies(object_cookies);
  }

  return (
    <div>
      <NavBar gerente="sofia" />
      <Updates />
      <div className="box-information">
        <BoxInformation porcentagem="10%" info="oi meu nome é alex" />
        <BoxInformation porcentagem="10%" info="oi meu nome é sofia" />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;