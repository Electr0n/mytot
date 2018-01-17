import React, { Component } from 'react';
import Logo from '../common/logo/logo';
import './footer.css';

export default class Footer extends Component{
  render(){
    return(
      <footer className='footer'>
        <div className='footer__background'></div>
        <div className='footer__logo'>
          <Logo color='white'/>
        </div>
        <div className='footer__menu'>
          <div className='footer__icon-download'></div>
          <div className='footer__icon-contacts'></div>
          <div className='footer__menu__item'><a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>Скачать My Tot</a></div>
          <div className='footer__menu__item'><a href=''>Контакты</a></div>
        </div>
        <div className='footer__triangle'></div>
        <div className='footer__flag-stripped'></div>
      </footer>
    );
  }
}
