import React, { Component } from 'react';
import Phone from '../common/phone/phone';
import './share-moments.css';
import screen from '../../assets/images/phone_screen-default.png';

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
            <div className='share-moments__phone'>
              <Phone size='s' color='white'>
                <div className='share-moments__phone__content_1'>
                  <img src={screen} />
                </div>
              </Phone>
            </div>
            <div className='share-moments__phone'>
              <Phone size='s' color='white'>
                <div className='share-moments__phone__content_2'>
                  <img src={screen} />
                </div>
              </Phone>
            </div>
            <div className='share-moments__phone'>
              <Phone size='s' color='white'>
                <div className='share-moments__phone__content_3'>
                  <img src={screen} />
                </div>
              </Phone>
            </div>
          </div>
        </div>
        <div className='share-moments__background_corner'></div>
        <div className='share-moments__background'></div>
      </div>
    );
  };
}
