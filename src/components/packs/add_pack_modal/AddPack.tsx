import { ChangeEvent, KeyboardEvent, useState } from "react";
import s from "../../registred/Registred.module.css";

type PropsType = {
  addPack: (title: string) => void;
};

export const AddPack = (props: PropsType) => {
  const [packTitle, setPackTitle] = useState("");

  const setNewPackTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setPackTitle(e.currentTarget.value);
  };

  const addPackHandler = () => {
    if (packTitle.trim() !== "") {
      props.addPack(packTitle);
      setPackTitle("");
    }
  };

  const addPackOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // if (error !== null) setError(null);
    if (e.charCode === 13) {
      addPackHandler();
    }
  };

  return (
    <div className={s.form}>
      <div>
        <h3>Add new pack</h3>
        <i>&#10006;</i>
      </div>
      <div>
        <label>Name pack</label>
        <input
          type="text"
          value={packTitle}
          onChange={setNewPackTitle}
          onKeyPress={addPackOnKeyPressHandler}
          placeholder={"Name pack"}
          className={s.inputs}
        />
      </div>
      <div className={s.btn_wrap}>
        <button className={s.cancel_btn}>Cancel</button>
        <button className={s.register_btn} onClick={addPackHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
