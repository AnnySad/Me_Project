import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsType } from "../../api/api";
import { fetchCardsThunk } from "../../bll/cardsReducer";
import { AppStoreType } from "../../bll/store";
import { AddNewCard } from "./add-new-card-modal/AddNewCard";
import { useParams } from "react-router-dom";

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, Array<CardsType>>((state) => state.cards);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchCardsThunk(id));
  }, [dispatch, id]);
  const [editMode, setEditMode] = useState(false);

  const addCardsHandle = () => {
    setEditMode(true);
  };

  return (
    <>
      <div>
        <input type="search" />
        <button onClick={addCardsHandle}>add new card</button>
      </div>
      {editMode && <AddNewCard id={id} />}
      {cards.map((c) => {
        return (
          <div key={c._id}>
            <div>{c.question}</div>
            <div>{c.answer}</div>
          </div>
        );
      })}
    </>
  );
};
