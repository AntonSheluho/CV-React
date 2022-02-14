import React from 'react';
import style from './Header.module.css';
import NavigLink from '../../NavigLink/NavigLink';

const Header = (props) => {

    

    return (
        <div>
            <h1 className={style.title__name}>ANTON SHELUKHO</h1>
            <h2 className={style.title__profession}>FUTURE FRONTEND DEVELOPER<span className="burger"></span></h2>
            <NavigLink/>
        </div>
    );
}

export default Header
