import React from "react";
import style from './ContentBox.module.css';

const ContentBox = (props) => {
    return (
    <div className={style.content_box}>
        {props.children}
    </div>
    )
}

export default ContentBox
