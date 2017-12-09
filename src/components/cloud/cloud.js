import React, { Component } from 'react';
import './cloud.css';

export default class Cloud extends Component{
  render(){
    return(
      <div className='cloud'>
        <div className='cloud__flag_stripped'></div>
        <div className='cloud__logo'></div>
        <div className='cloud__content'>
          <div className='cloud__content__label'>
            Сохрани бесценные фото и видео в надежном облаке
          </div>
          <div className='cloud__content__description'>
            <div className='cloud__content__description__item'>
              <div className='cloud__content__description__logo'></div>
              <div className='cloud__content__description__text'>
                Безопастность и надежность
              </div>
            </div>
            <div className='cloud__content__description__item'>
              <div className='cloud__content__description__logo'></div>
              <div className='cloud__content__description__text'>
                Быстрое восстановление доступа
              </div>
            </div>
            <div className='cloud__content__description__item'>
              <div className='cloud__content__description__logo'></div>
              <div className='cloud__content__description__text'>
                Ограниченные права доступа
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
