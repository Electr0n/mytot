import React, { Component } from 'react';
import Header from '../header/header';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className='app__container'>
        <Header />
        <div className='background-gradient'>
          <div className='background-gradient__strip_first'></div>
          <div className='background-gradient__strip_second'></div>
          <div className='background-gradient__strip_third'></div>
        </div>
      </div>
    );
  }
}
