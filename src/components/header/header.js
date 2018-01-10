import React, { Component } from 'react';
import Logo from '../common/logo/logo';
import './header.css';

export default class Header extends Component{
  render(){
    return(
      <header className='header'>
        <Logo color='green' />
        <div className='header__menu'>
          <div className='header__menu-btn'><a href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>Скачать My Tot</a></div>
          <div className='header__menu-btn'><a href='/'>Контакты</a></div>
        </div>
      </header>
    );
  };
}
