import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardPacksType } from "../../../api/api";
import s from "../../../table.module.css";

type PropsType = {
  pack: CardPacksType;
  removePack: (id: string) => void;
  addNewTite: (id: string, newTitle: string) => void;
};

export const Pack = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(props.pack.name);
  const removePackHandler = useCallback(() => {
    props.removePack(props.pack._id);
  }, [props]);

  let history = useHistory();

  function handleClick(id: string) {
    history.push(`/cards/${id}`);
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const activeViewMode = () => {
    setEditMode(!editMode);
    if (newTitle && newTitle.trim() !== "") {
      props.addNewTite(props.pack._id, newTitle);
    }
  };

  const addTaskOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      activeViewMode();
    }
  };

  const onClickHandler = () => {
    setEditMode(!editMode);
    setNewTitle(props.pack.name);
  };

  return (
    <>
      <div className={s.table_line}>
        {editMode ? (
          <input
            onChange={changeTitle}
            autoFocus
            onBlur={activeViewMode}
            onKeyPress={addTaskOnKeyPressHandler}
            value={newTitle}
          />
        ) : (
          <div className={s.table_body}>
            <span>{props.pack.name}</span> <span>{props.pack.cardsCount}</span>
            <span>{props.pack.user_name}</span>
          </div>
        )}
        <div className={s.btns}>
          <button className={s.delete} onClick={removePackHandler}>
            Delete
          </button>
          <button className={s.edit} onClick={onClickHandler}>
            Edit
          </button>
          <button className={s.learn} onClick={() => handleClick(props.pack._id)}>
            Learn
          </button>
        </div>
      </div>
    </>
  );
};
