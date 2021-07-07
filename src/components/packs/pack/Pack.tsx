import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardPacksType } from "../../../api/api";

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

  function handleClick() {
    history.push("/cards");
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
    <div>
      <div key={props.pack._id}>
        {editMode ? (
          <input
            onChange={changeTitle}
            autoFocus
            onBlur={activeViewMode}
            onKeyPress={addTaskOnKeyPressHandler}
            value={newTitle}
          />
        ) : (
          <span onClick={handleClick}>
            {props.pack.name} {props.pack.cardsCount} {props.pack._id}
          </span>
        )}
      </div>
      <div>
        <button onClick={removePackHandler}>Delete</button>
        <button onClick={onClickHandler}>Edit</button>
        <button>Learn</button>
      </div>
    </div>
  );
};
