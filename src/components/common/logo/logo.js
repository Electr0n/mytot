import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './logo.css';

export default class Logo extends Component{

  className(){
    const color = this.props.color;
    return color ? 'logo logo_color_' + color : 'logo';
  }

  render(){
    return(
      <a className={this.className()} href='https://play.google.com/store/apps/details?id=com.inflow.mytot'>
        {logo}
      </a>
    );
  }
}
