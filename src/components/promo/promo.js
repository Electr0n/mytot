import React, { Component } from 'react';
import Phone from '../common/phone/phone';
import './promo.css';

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
                <iframe
                  title='mytot'
                  width="240"
                  height="425"
                  src="https://www.youtube.com/embed/ZYAprQQfgZM?version=3&autoplay=1&loop=1&playlist=ZYAprQQfgZM&showinfo=0&controls=0&modestbranding=0&enablejsapi=1&origin=http://mytotlandingpage.herokuapp.com/"
                  frameBorder='0'>
                </iframe>
              </div>
            </Phone>
          </div>
        </div>
      </div>
    );
  };
}
