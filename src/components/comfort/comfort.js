import React, { Component } from 'react';
import Phone from '../common/phone/phone';
import './comfort.css';
import screen from '../../assets/images/phone_screen-default.png';

export default class Comfort extends Component {
  render(){
    return(
      <div className='comfort__wrapper'>
        <div className='comfort'>
          <div className='comfort__phone'>
            <Phone size='m' color='black'>
              <div className='comfort__phone__content'>
                <img alt='Просматривай контент удобно!' src={screen} />
              </div>
            </Phone>
          </div>
          <div className='comfort__content'>
            <div className='comfort__label'>Просматривай контент удобно!</div>
            <div className='comfort__text'>Навигация и поиск по возрасту ребенка. Группировка по дням или событиям.</div>
            <div className='comfort__panda'></div>
          </div>
          <div className='comfort__phone'>
            <Phone size='m' color='black'>
              <div className='comfort__phone__content'>
                <img alt='Просматривай контент удобно!' src={screen} />
              </div>
            </Phone>
          </div>
        </div>
        <div className='comfort__line'></div>
      </div>
    );
  };
}
