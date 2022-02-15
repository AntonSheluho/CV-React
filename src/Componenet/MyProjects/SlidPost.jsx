import React from 'react';
import cl from './MyProjects.module.css';

export default function SlidPost({children, ...props}) {
  return (
    <div className={cl.slide}>
        <div className={cl.slide__wrap}>
            <a className="slide__link" href={props.href}>
                <img className="slide__img" src={props.src} alt='img'/>
            </a>
        </div>
        <div className="slide__text">{children}</div>
    </div>
  )
}
