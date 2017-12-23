import React, { Component } from 'react';
import Figure from '../common/figure/figure';
import './figure-divider.css';

export default class FigureDivider extends Component{
  render(){
    return(
      <div className='figureDivider'>
        <div className='figureDivider__item-1'>
          <Figure shape='plus' color='pacificBlue' size='l' />
        </div>
        <div className='figureDivider__item-2'>
          <Figure shape='circle' color='persianGreen' size='l' />
        </div>
        <div className='figureDivider__item-3'>
          <Figure shape='circle' color='cerise' size='s' />
        </div>
        <div className='figureDivider__item-4'>
          <Figure shape='circle' color='pacificBlue' size='s' />
        </div>
        <div className='figureDivider__item-5'>
          <Figure shape='plus' color='onahau' size='m' />
        </div>
        <div className='figureDivider__item-6'>
          <Figure shape='circle' color='pacificBlue' size='l' />
        </div>
        <div className='figureDivider__item-7'>
          <Figure shape='plus' color='persianGreen' size='l' />
        </div>
        <div className='figureDivider__item-8'>
          <Figure shape='circle' color='onahau' size='m' />
        </div>
        <div className='figureDivider__item-9'>
          <Figure shape='circle' color='pacificBlue' size='l' />
        </div>
        <div className='figureDivider__item-10'>
          <Figure shape='circle' color='cerise' size='s' />
        </div>
        <div className='figureDivider__item-11'>
          <Figure shape='circle' color='persianGreen' size='m' />
        </div>
        <div className='figureDivider__item-12'>
          <Figure shape='plus' color='persianGreen' size='m' />
        </div>
        <div className='figureDivider__item-13'>
          <Figure shape='plus' color='onahau' size='m' />
        </div>
        <div className='figureDivider__item-14'>
          <Figure shape='circle' color='cerise' size='s' />
        </div>
        <div className='figureDivider__item-15'>
          <Figure shape='circle' color='persianGreen' size='m' />
        </div>
        <div className='figureDivider__item-16'>
          <Figure shape='circle' color='cerise' size='s' />
        </div>
        <div className='figureDivider__item-17'>
          <Figure shape='plus' color='persianGreen' size='m' />
        </div>
        <div className='figureDivider__item-18'>
          <Figure shape='circle' color='pacificBlue' size='l' />
        </div>
      </div>
    );
  };
}
