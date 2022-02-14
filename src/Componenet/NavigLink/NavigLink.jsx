import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from './NavigLink.module.css';

const NavigLink = (props) => {

    const [text, setText] = useState([
        {anchor: 'contacts', text: 'CONTACTS', id: 1},
        {anchor: 'about_me', text: 'ABOUT ME', id: 2},
        {anchor: 'education', text: 'EDUCATION', id: 3},
        {anchor: 'skills', text: 'SKILLS', id: 4},
        {anchor: 'my_projects', text: 'MY PROJECTS', id: 5},
        {anchor: 'languages', text: 'LANGUAGES', id: 6}
    ])

    return (
        <nav className={style.title__navig}>
            {text.map(text =>
                <div key={text.id} className={style.navig_link}>
                    <Link to={text.anchor} className={style.link} >{text.text}</Link>
                </div> 
            )}
        </nav>
    );
}

export default NavigLink