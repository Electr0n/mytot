import React, { Component } from 'react';
import Logo from '../common/logo/logo';
import './header.css';

export default class Header extends Component{
  render(){
    return(
      <header className='header'>
        <Logo color='green' />
        <div className='header__menu'>
          <a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>
            <div className='header__icon-download'>
            </div>
          </a>
          <div className='header__icon-contacts'></div>
          <div className='header__menu-btn'><a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>Скачать My Tot</a></div>
          <div className='header__menu-btn'><a href='/'>Контакты</a></div>
        </div>
      </header>
    );
  };
}
