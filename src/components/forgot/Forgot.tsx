import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {forgotThunk} from "../../bll/forgotReduser";
import s from "./../registred/Registred.module.css"
import {CheckEmail} from "./fogotPassword";


export const Forgot = () => {
    const dispatch = useDispatch();

    // const  onSubmitForm = () => {
    //     API.forgot(loginValue, emailValue).then(res => console.log(res))
    // };

    const [loginValue, setLoginValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [isSend, setIsSend] = useState(false)
    const onSubmitForm = useCallback(() => {
        dispatch(forgotThunk(loginValue, emailValue));
        setIsSend(true);
    }, [loginValue, emailValue]);


    const setLoginHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.currentTarget.value)
    }

    const setEmailHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }


    return (
        <>
            {!isSend && <div className={s.container}>
                <div className={s.form}>
                    <h3>It-incubator</h3>
                    <p>Forgot your password?</p>
                    <input type='email'
                           value={loginValue}
                           onChange={setLoginHandle}
                           className={s.inputs}
                        //onBlur={setEmailError}
                           placeholder={"login"}/>
                    <input type='email'
                           value={emailValue}
                           onChange={setEmailHandle}
                           className={s.inputs}
                        //onBlur={setEmailError}
                           placeholder={"Email"}/>
                    <button onClick={onSubmitForm} className={s.register_btn}>Send</button>
                    <p>Did you remember your password?</p>
                    <h4>Try logging in</h4>
                </div>
            </div>}
            {isSend && <CheckEmail/>}
        </>
    );

}
