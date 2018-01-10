import React, { Component } from 'react';
import Phone from '../common/phone/phone';
import './promo.css';
import screen from '../../assets/images/phone_screen-default.png';

export default class Promo extends Component{
  render(){
    return(
      <div className='promo'>
        <div className='promo__content'>
          <div className='promo__content__label'>Не забывай бесценное!</div>
          <div className='promo__content__description'>
            Мы поможем сохранить бесценные моменты взросления Ваших детей в фото, видео и дневниках в нашем приложении.
          </div>
          <a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>
            <div className='promo__content__download_link'></div>
          </a>
        </div>
        <div className='promo__images'>
          <div className='promo__panda-1'></div>
          <div className='promo__panda-2'></div>
          <div className='promo__phone'>
            <Phone size='l' color='black'>
              <div className='promo__phone__content'>
                <img src={ screen }/>
              </div>
            </Phone>
          </div>
        </div>
      </div>
    );
  };
}
