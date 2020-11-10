import React from 'react';

import BoxInformation from '../../BoxInformation/BoxInformation';
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import Updates from '../../Updates/Updates';

import './MainPage.css';

function MainPage() {
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