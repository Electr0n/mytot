import React, { Component } from 'react';
import FigureDivider from '../figure-divider/figure-divider';
import './important.css';

export default class Important extends Component{
  render(){
    return(
      <div className='important__wrapper'>
        <FigureDivider />
        <div className='important'>
          <div className='important__content'>
            <div className='important__content__header'>Все вместе!</div>
            <div className='important__content__header'>Не пропустите важное!</div>
            <div className='important__content__text'>
              <p>Дети растут быстро!</p>
              <p>(следите за интересными событиями жизни ваших племяников\внуков\детей друзей)</p>
            </div>
          </div>
          <div className='important__image'></div>
        </div>
      </div>
    )
  }
}
