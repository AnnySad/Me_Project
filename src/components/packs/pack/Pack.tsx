import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { CardPacksType } from "../../../api/api";

type PropsType = {
  pack: CardPacksType;
  removePack: (id: string) => void;
  addNewTite: (id: string, newTitle: string) => void;
};

export const Pack = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(props.pack.name);
  console.log("newTitle ", newTitle);
  const removePackHandler = useCallback(() => {
    props.removePack(props.pack._id);
  }, [props]);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  // const addNewTitle = useCallback(
  //   (newTitle: string) => {
  //     props.addNewTite(props.pack._id, newTitle);
  //   },
  //   // [props.id, props.newTodolistTitle, props]
  //   [props]
  // );

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

  const onDblClickHandler = () => {
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
          <span onDoubleClick={onDblClickHandler}>
            {props.pack.name} {props.pack.cardsCount} {props.pack._id}
          </span>
        )}
      </div>
      <div>
        <button onClick={removePackHandler}>Delete</button>
        <button>Edit</button>
        <button>Learn</button>
      </div>
    </div>
  );
};
