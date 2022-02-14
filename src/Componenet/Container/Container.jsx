import React from 'react';
import classes from './Containet.module.css';

function Container(props) {
    return (
        <div className={classes.Container}>
            {props.children}
        </div>
    )
}

export default Container