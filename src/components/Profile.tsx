import React, {useState} from "react";
import SuperInputText from "./Input/Input";
import s from './header/Header.module.css'
import SuperCheckbox from "./checkbox/Checkbox";
import SuperButton from "./button/Button";



function Profile() {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div>
            Profile
        </div>

    );
}

export default Profile;
