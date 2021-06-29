import React from "react";
import s from "../registred/Registred.module.css";
import photo from './img.png'

export const CheckEmail = () => {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <h3>It-incubator</h3>
               <div>
                   <img src={photo} alt=""/>
               </div>
                <h3>Check Email</h3>
                <p>We’ve sent an Email with instructions to<br/>example@mail.com </p>
            </div>
        </div>
    )
}