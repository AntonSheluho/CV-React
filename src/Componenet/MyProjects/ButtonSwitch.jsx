import React from 'react';
import arrow from '../../images/keyboard-right-arrow-button-1_icon-icons.com_72690.svg';

export default function ButtonSwitch({...props}) {
  return (
    <button onClick={() => props.func()} className={props.classB}>
        <img className="slider__arrow_right arrow" src={arrow} alt="img"/>
    </button>
  )
}
