import React, { Component } from 'react';
import './phone.css';

export default class Phone extends Component{

  propToClassName(attr, value){
    return value
      ? ' phone_' + attr + '_' + value
      : '';
  }

  className(){
    const props = ['size', 'color', 'shadow'];
    return ['phone'].concat(props.map((propName) => this.propToClassName(propName, this.props[propName]))).join('');
  }

  render(){
    return(
      <div className={this.className()}>
        {this.props.children}
      </div>
    );
  };
}
