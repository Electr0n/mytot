import React, { Component } from 'react';
import './history.css';

export default class History extends Component{
  render(){
    return(
      <div className='history'>
        <div className='history__slicer_top'></div>
        <div className='history__photo-frame'></div>
        <div className='history__container'>
          <div className='history__container__label'>
            Истории, которые не забываются и не выцветают!
          </div>
          <div className='history__container__description'>
            <div className='history__description__logo'></div>
            <div className='history__description__wrapper'>
              <div className='history__description__bubbles'>
                <div className='history__description__bubbles__item talk-bubble_1'>
                  Делай пометки о первых шагах и достижениях.
                </div>
                <div className='history__description__bubbles__item  talk-bubble_2'>
                  Сохраняй в приложении каждый день фото и видео.
                </div>
                <div className='history__description__bubbles__item talk-bubble_3'>
                  Записывай забавные истории и моменты.
                </div>
              </div>
              <div className='history__description__text'>
                Не пропускай каждый уникальный день взрослеющего ребенка!
              </div>
            </div>
          </div>
        </div>
        <div className='history__slicer_bottom'></div>
      </div>
    );
  };
}
