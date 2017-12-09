import React, { Component } from 'react';
import './promo.css';

export default class Promo extends Component{
  render(){
    return(
      <div className='promo'>
        <div className='promo__side'>
          <div className='promo__side__label'>Не забывай бесценное!</div>
          <div className='promo__side__description'>
            Мы поможем сохранить бесценные моменты взросления Ваших детей в фото, видео и дневниках в нашем приложении.
          </div>
          <div className='promo__side__download_link'>
            <a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'></a>
          </div>
        </div>
        <div className='promo__side'>
        </div>
      </div>
    );
  };
}
