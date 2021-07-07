import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsType } from "../../api/api";
import { fetchCardsThunk } from "../../bll/cardsReducer";
import { AppStoreType } from "../../bll/store";

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, Array<CardsType>>((state) => state.cards);
  useEffect(() => {
    dispatch(fetchCardsThunk());
  }, [dispatch]);

  return (
    <>
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
