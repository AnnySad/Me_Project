import React, {useState} from "react";
import SuperInputText from "./Input/Input";
import s from './Header.module.css'
import SuperCheckbox from "./checkbox/Checkbox";
import SuperButton from "./button/Button";



function Testing() {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div>
            <SuperInputText
                className={s.blue}
            />
            <div>
                <SuperCheckbox   checked={checked}
                                 onChangeChecked={setChecked}/>
            </div>
            <div>
                <SuperButton>
                   click
                </SuperButton>
            </div>
        </div>

    );
}

export default Testing;
