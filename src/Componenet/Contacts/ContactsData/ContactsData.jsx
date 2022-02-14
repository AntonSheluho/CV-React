import React from "react";
import style from './ContactsData.module.css';
import img from '../../../images/my_photo2.jpg'

const ContactsData = (props) => {
    return (
        <div className={style.contactsData}>
            <div className="contacts__photo">
                <img className={style.my_photo} src={img} alt="img"/>
            </div>
            <div className={style.contacts__data}>
                <div className={style.data__phone}>Phone: <a className={style.data_link} href="tel:+375259208485">+375(25) 920-84-85</a></div>
                <div className={style.data__phone}>Email: <a className={style.data_link} href="mailto:grinfrend2@gmail.com">grinfrend2@gmail.com</a></div>
                <div className={style.data__phone}>LinkedIn: <a className={style.data_link} href="http://www.linkedin.com/in/anton-shelukho-b4479321a">Anton Shelukho</a></div>
            </div>
        </div>
    )
}

export default ContactsData
// style.data_text