import React, { Component } from 'react';
import './access.css';

export default class Access extends Component{
  render(){
    return(
      <div className='access'>
        <div className='access__background'></div>
        <div className='access__background-line'></div>
        <div className='access__content'>
          <div className='access__header'>Когда ваш ребенок попросит рассказать о своем детстве - просто дайте ему доступ к аккаунту</div>
          <div className='access__text'>Бесценные моменты взросления Ваших детей в фото, видео и дневниках в нашем приложении.</div>
          <a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>
            <div className='promo__content__download_link'></div>
          </a>
        </div>
        <div className='access__image'></div>
      </div>
    );
  }
}
