import React, {useState} from "react";
import SuperInputText from "./common/Input/Input";
import s from './header/Header.module.css'
import SuperCheckbox from "./common/checkbox/Checkbox";
import SuperButton from "./common/button/Button";



function Profile() {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div>
            Profile
        </div>

    );
}

export default Profile;
