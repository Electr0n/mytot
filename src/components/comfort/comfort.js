import React, { Component } from 'react';
import './comfort.css';

export default class Comfort extends Component {
  render(){
    return(
      <div className='comfort__wrapper'>
        <div className='comfort'>
          <div className='comfort__phone'></div>
          <div className='comfort__content'>
            <div className='comfort__label'>Просматривай контент удобно!</div>
            <div className='comfort__text'>Навигация и поиск по возрасту ребенка. Группировка по дням или событиям.</div>
            <div className='comfort__panda'></div>
          </div>
          <div className='comfort__phone'></div>
        </div>
        <div className='comfort__line'></div>
      </div>
    );
  };
}
