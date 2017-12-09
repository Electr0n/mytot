import React, { Component } from 'react';
import './share-moments.css';

export default class ShareMoments extends Component{
  render(){
    return(
      <div className='share-moments'>
        <div className='share-moments__content'>
          <div className='share-moments__content__label'>
            Делись моментами!
          </div>
          <div className='share-moments__content__description'>
            Поделись лучшими моментами с вашими близкими - легко и удобно.
          </div>
          <div className='share-moments__content__images'>
            <div className='share-moments__content__images__item'></div>
            <div className='share-moments__content__images__item'></div>
            <div className='share-moments__content__images__item'></div>
          </div>
        </div>
        <div className='share-moments__background_corner'></div>
        <div className='share-moments__background'></div>
      </div>
    );
  };
}
