import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsType } from "../../api/api";
import { fetchCardsThunk, setPageCountCard, setSearch, setSortCards } from "../../bll/cardsReducer";
import { AppStoreType } from "../../bll/store";
import { AddNewCard } from "./add-new-card-modal/AddNewCard";
import { useParams } from "react-router-dom";
import s from "../../table.module.css";
import { AuthRedirectComponent } from "../../hoc/AuthRedirectComponent";
import { Rating } from "../rating/Rating";
import { Paginator } from "../paginator/Paginator";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, Array<CardsType>>((state) => state.cards.cards);
  const page = useSelector<AppStoreType, number>((state) => state.cards.page);
  const pageCount = useSelector<AppStoreType, number>((state) => state.cards.pageCount);
  const search = useSelector<AppStoreType, string>((state) => state.cards.searchVal);
  const sort = useSelector<AppStoreType, string>((state) => state.cards.sort);
  const cardsTotalCount = useSelector<AppStoreType, number>((state) => state.cards.cardsTotalCount);
  let { id } = useParams<{ id: string }>();

  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    dispatch(fetchCardsThunk(id, page, pageCount, search, sort));
  }, [dispatch, id, page, pageCount, search, sort]);

  const [editMode, setEditMode] = useState(false);

  const stars = [1, 1, 1, 1, 1];

  const addCardsHandle = () => {
    setEditMode(true);
  };

  const onChangrHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.currentTarget.value);
  };

  const findCardHandle = () => {
    dispatch(setSearch(searchVal));
    // dispatch(fetchCardsThunk(id, page, pageCount, searchVal));
  };

  const sortUp = () => {
    dispatch(setSortCards("5grade"));
    // dispatch(fetchCardsThunk(id, page, pageCount, searchVal));
  };

  const sortDown = () => {
    dispatch(setSortCards("grade"));
    // dispatch(fetchCardsThunk(id, page, pageCount, searchVal));
  };

  const onPageChanged = (page: number) => {
    dispatch(fetchCardsThunk(id, page, pageCount));
  };
  const setPagesCount = (pageCount: number) => {
    dispatch(setPageCountCard(pageCount));
  };

  const closeCardModal = () => setEditMode(false);

  return (
    <div className={s.table_container_card}>
      <div className={s.table_wrap}>
        <h4>Cards list</h4>
        <div className={s.searchbar}>
          <input type="search" value={searchVal} placeholder={"search"} onChange={onChangrHandler} />
          <button className={s.search_btn} onClick={findCardHandle}>
            &#128269;
          </button>
          <button className={s.add_btn} onClick={addCardsHandle}>
            add new card
          </button>
        </div>

        <div className={s.table}>
          {editMode && <AddNewCard id={id} closeModal={closeCardModal} />}
          <div className={s.table_title + " " + s.table_title_card}>
            <span>Question</span>
            <span>Answer</span>
            <span className={s.sort_btns}>
              sort
              <button onClick={sortUp}>&#9650;</button>
              <button onClick={sortDown}> &#9660;</button>
            </span>
            <span>Grade</span>
          </div>
          {cards.map((c) => {
            return (
              <div key={c._id} className={s.table_body_card + " " + s.table_line_card}>
                <span>{c.question}</span>
                <span>{c.answer}</span>
                <div className={s.grade}>
                  {stars.map((star, i) => (
                    <Rating key={i} blue={c.grade > i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Paginator
          page={page}
          pageCount={pageCount}
          totalCount={cardsTotalCount}
          onPageChanged={onPageChanged}
          setPagesCount={setPagesCount}
        />
      </div>
    </div>
  );
};
export default AuthRedirectComponent(Cards);
