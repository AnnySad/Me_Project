import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPacksThunk } from "../../bll/packsReduser";
import { AppStoreType } from "../../bll/store";
import s from "./Paginator.module.css";

type PropsType = {
  page: number;
  pageCount: number;
  totalCount: number
  onPageChanged: (page: number) => void
};

export const Paginator = ({ page, pageCount, totalCount, onPageChanged }: PropsType) => {
  // const dispatch = useDispatch();
  // const cardPackTotalCount = useSelector<AppStoreType, number>((state) => state.packs.cardPackTotalCount);

  // const onPageChanged = (page: number) => {
  //   dispatch(fetchPacksThunk(page, pageCount,sortPack));
  // };

  const PagesCount = Math.ceil(totalCount / pageCount);
  let pages = [];
  for (let i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 10;

  const portionCount = Math.ceil(PagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator_container}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &lArr;
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, i) => {
          return (
            <span
              key={i}
              className={page === p ? s.selectedPage : s.paginator}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &rArr;
        </button>
      )}
    </div>
  );
};
