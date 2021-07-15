import React, {useCallback} from "react";
import {CardsType} from "../../../../api/api";
import s from "../../../../table.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";

type CardPropsType = {
    card: CardsType;
    removeCard: (id: string) => void;
}


const Card = (props: CardPropsType) => {
    const userId = useSelector<AppStoreType, string | null>((state) => state.auth._id);


    const removeCardHandler = useCallback(() => {
        props.removeCard(props.card._id);
    }, [props]);

    return <div>
        {userId === props.card.user_id ? (
            <div className={s.btns}>
                <button className={s.delete} onClick={removeCardHandler}>
                    Delete
                </button>
            </div>
        ) : ( "")}
    </div>
}

export default Card