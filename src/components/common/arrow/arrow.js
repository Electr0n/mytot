import React, { Component } from 'react';
import './arrow.css';

export default class Arrow extends Component{

  textClassName(){
    return this.props.flipped ? 'arrow__text arrow__text_flipped' : 'arrow__text';
  }

  arrowClassName(){
    return this.props.flipped ? 'arrow arrow_flipped' : 'arrow';
  }

  containerClassName(){
    return this.props.flipped ? 'arrow__container arrow__container_flipped' : 'arrow__container'
  }

  render(){
    return(
      <div className={this.containerClassName()}>
        <div className={this.textClassName()}>Текст перехода</div>
        <div className={this.arrowClassName()}></div>
      </div>
    );
  };
}
