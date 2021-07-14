import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsType } from "../../api/api";
import { fetchCardsThunk } from "../../bll/cardsReducer";
import { AppStoreType } from "../../bll/store";
import { AddNewCard } from "./add-new-card-modal/AddNewCard";
import { useParams } from "react-router-dom";
import s from "../../table.module.css";
import { AuthRedirectComponent } from "../../hoc/AuthRedirectComponent";
import { Rating } from "../rating/Rating";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, Array<CardsType>>((state) => state.cards.cards);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchCardsThunk(id));
  }, [dispatch, id]);
  const [editMode, setEditMode] = useState(false);

  const stars = [1, 1, 1, 1, 1];

  const addCardsHandle = () => {
    setEditMode(true);
  };
  const closeCardModal = () => setEditMode(false);

  return (
    <div className={s.table_container_card}>
      <div className={s.table_wrap}>
        <h4>Cards list</h4>
        <div className={s.searchbar}>
          <input type="search" />
          <button className={s.search_btn}>&#128269;</button>
          <button className={s.add_btn} onClick={addCardsHandle}>
            add new card
          </button>
        </div>

        <div className={s.table}>
          {editMode && <AddNewCard id={id} closeModal={closeCardModal} />}
          <div className={s.table_title + " " + s.table_title_card}>
            <span>Question</span>
            <span>Answer</span>
            {/* <span className={s.sort_btns}>
              sort
              <button>&#9650;</button>
              <button> &#9660;</button>
            </span> */}
            <span>Grade</span>
          </div>
          {cards.map((c) => {
            return (
              <div key={c._id} className={s.table_body_card + " " + s.table_line_card}>
                <span>{c.question}</span>
                <span>{c.answer}</span>
                <div>
                  {stars.map((star, i) => (
                    <Rating key={i} blue={c.grade > i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AuthRedirectComponent(Cards);
