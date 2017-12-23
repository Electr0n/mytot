import React, { Component } from 'react';
import './figure.css';

export default class Figure extends Component{

  propToClassName(attr, value){
    return value
      ? ' figure_' + attr + '_' + value
      : '';
  }

  className(){
    const props = ['shape', 'size', 'color'];
    return ['figure'].concat(props.map((propName) => this.propToClassName(propName, this.props[propName]))).join('');
  }

  render(){
    return(
      <div className={this.className()}></div>
    );
  };
}
