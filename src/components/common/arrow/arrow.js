import React, { Component } from 'react';
import './arrow.css';

export default class Arrow extends Component{

  textClassName(){
    return this.props.flipped ? 'arrow__text arrow__text_flipped' : 'arrow__text';
  }

  arrowClassName(){
    return this.props.flipped ? 'arrow arrow_flipped' : 'arrow';
  }

  render(){
    return(
      <div className='arrow__container'>
        <div className={this.textClassName()}>Текст перехода</div>
        <div className={this.arrowClassName()}></div>
      </div>
    );
  };
}
