import React, {ChangeEvent, useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {forgotThunk} from "../../bll/forgotReduser";

export const Forgot = () => {
    const dispatch = useDispatch();

    // const  onSubmitForm = () => {
    //     API.forgot(loginValue, emailValue).then(res => console.log(res))
    // };

    const [loginValue, setLoginValue]= useState('')
    const [emailValue, setEmailValue]= useState('')
    const onSubmitForm = useCallback(() => {
        dispatch( forgotThunk(loginValue,emailValue));
    }, [loginValue,emailValue]);


    const setLoginHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginValue(e.currentTarget.value)
    }

    const setEmailHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }



    return (
        <div>
            <p>It-incubator</p>
            <p>Forgot your password?</p>
            <input type='email'
                   value={loginValue}
                   onChange={setLoginHandle}
                //onBlur={setEmailError}
                   placeholder={"login"} />
            <input type='email'
                   value={emailValue}
                   onChange={setEmailHandle}
                //onBlur={setEmailError}
                   placeholder={"Email"} />
            <button onClick={onSubmitForm}>Send</button>
                <p>Password: free</p>
        </div>
);

}
