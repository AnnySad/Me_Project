import React, {useState} from "react";
import SuperInputText from "../common/Input/Input";
import SuperCheckbox from "../common/checkbox/Checkbox";
import SuperButton from "../common/button/Button";
import {API} from "../../api/api";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)

    const onClickHandler=()=>{
        API.createLogin({email, password, checked})
            .then(res=>{
                console.log(res)
            })
    }

    return (
        <div>
            <SuperInputText value={email} placeholder={"email"} onChangeText={setEmail}/>
            <SuperInputText value={password} placeholder={"password"} onChangeText={setPassword}/>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            <SuperButton onClick={onClickHandler}>Sign in</SuperButton>
        </div>
    );
}

export default Login;
