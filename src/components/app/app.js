import React, { Component } from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import ShareMoments from '../share-moments/share-moments';
import Cloud from '../cloud/cloud';
import History from '../history/history';
import Comfort from '../comfort/comfort';
import Important from '../important/important';
import Acceess from '../access/access';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className='app__container'>
        <div className='background-gradient'>
          <div className='background-gradient__strip_first'></div>
          <div className='background-gradient__strip_second'></div>
          <div className='background-gradient__strip_third'></div>
        </div>
        <Header />
        <Promo />
        <ShareMoments />
        <Cloud />
        <History />
        <Comfort />
        <Important />
        <Acceess />
      </div>
    );
  }
}
