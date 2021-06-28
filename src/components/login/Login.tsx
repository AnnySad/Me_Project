import React, {ChangeEvent, useCallback, useState} from "react";
import SuperInputText from "../common/Input/Input";
import SuperCheckbox from "../common/checkbox/Checkbox";
import SuperButton from "../common/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";
import s from "./login.module.css";
import {onClickLoginThunk} from "../../bll/loginReducer";

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const [errorEmailMessage, setErrorEmailMessage] = useState<string | null>(null);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string | null>(null);

    const dispatch = useDispatch();




    const setEmailError = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(email)) {
            setErrorEmailMessage("Invalid email address");
        } else {
            setErrorEmailMessage(null);
        }
    };


    const setPasswordError = () => {
        if (password !== password || password.length !== password.length) {
            setErrorPasswordMessage("Password mismatch");
        } else if (password.length < 7 || password.length < 7) {
            setErrorPasswordMessage("Password must be more than 7 characters...");
        } else {
            setErrorPasswordMessage(null);
        }
    };


    const error = useSelector<AppStoreType, string | null>((state) => state.register.error);
    const isFetching = useSelector<AppStoreType, boolean>((state) => state.register.isFetching);

    const onClickHandler = useCallback(() => {
        dispatch(onClickLoginThunk(email, password, checked));
    }, [email, password, checked]);

    const isLoggedIn = useSelector<AppStoreType, boolean>((state) => state.register.isRegistred);
    if (isLoggedIn) {
        return <Redirect to={"/Profile"}/>;
    }


    return (
        <>
            {isFetching ? <Preloader/> : null}
            <div className={s.container}>
                <div className={s.form}>
                    <SuperInputText
                        type='email'
                        value={email}
                        placeholder={"email"}
                        onChangeText={setEmail}
                        onBlur={setEmailError}/>
                    {errorEmailMessage && <span className={s.error}>{errorEmailMessage}</span>}

                    <SuperInputText
                        type='password'
                        value={password}
                        placeholder={"password"}
                        onBlur={setPasswordError}
                        onChangeText={setPassword}/>
                    {error && <span className={s.error}>{error}</span>}
                    {errorPasswordMessage && <span className={s.error}>{errorPasswordMessage}</span>}

                    <SuperCheckbox checked={checked}
                                   onChangeChecked={setChecked}/>
                     <div className={s.btn_wrap}>
                    <SuperButton className={s.singlIn_btn}
                        onClick={onClickHandler}>Sign in</SuperButton>
                     </div>
            </div>
            </div>
        </>);
}


