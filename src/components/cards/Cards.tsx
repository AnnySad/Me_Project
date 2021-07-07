import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsType } from "../../api/api";
import { addNewCard, fetchCardsThunk } from "../../bll/cardsReducer";
import { AppStoreType } from "../../bll/store";
import { AddNewCard } from "./add-new-card-modal/AddNewCard";

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, Array<CardsType>>((state) => state.cards);
  useEffect(() => {
    dispatch(fetchCardsThunk());
  }, [dispatch]);

  const [editMode, setEditMode] = useState(false);

  let addNewCards = useCallback(
    (cardsPack_id: string, question: string, answer: string) => {
      dispatch(addNewCard(cardsPack_id, question, answer));
    },
    [dispatch]
  );

  const addCardsHandle = () => {
    setEditMode(true);
  };

  return (
    <>
      <div>
        <input type="search" />
        <button onClick={addCardsHandle}>add new card</button>
      </div>
      {editMode && <AddNewCard addCard={addNewCards} />}
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
