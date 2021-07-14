import { Dispatch } from "redux";
import { cardsAPI, CardsType } from "../api/api";

// const initialState: Array<CardsType> = [];
const initialState = {
  cards: [] as Array<CardsType>,
  grade: 0,
  sortCards: "" as string,
  page: 1,
  pageCount: 5,
  cardsTotalCount: 100,
  cardsPack_id: ""
};

type initialStateType = typeof initialState;

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "SET-CARDS": {
      return {
        ...state,
        cards: [...action.cards],
      };
    }
    case "ADD-NEW-CARD": {
      return { ...action.cards, ...state };
    }

    case "SET-GRADE": {
      return { ...state, grade: action.grade };
    }

    case "SET-PAGEC": {
      return {
        ...state,
        page: action.page,
      };
    }

    // case "SET-PAGE-COUNT": {
    //   return {
    //     ...state,
    //     pageCount: action.pageCount,
    //   };
    // }

    case "SET-CARD-TOTAL-COUNT": {
      return {
        ...state,
        cardsTotalCount: action.cardsTotalCount,
    };
  }

    default:
      return state;
  }
};

//actions
const setCards = (cards: Array<CardsType>) => ({ type: "SET-CARDS", cards } as const);
const addNewCards = (cards: Array<CardsType>) => ({ type: "ADD-NEW-CARD", cards } as const);
const setGrade = (grade: number) => ({ type: "SET-GRADE", grade } as const);
const setPage = (page: number) => ({type: "SET-PAGEC", page} as const);
// const setPageCount = (pageCount:number) => ({type: "SET-PAGE-COUNT", pageCount} as const)
const setCardTotalCount = (cardsTotalCount: number) =>
    ({ type: "SET-CARD-TOTAL-COUNT", cardsTotalCount } as const);

//thunk
export const fetchCardsThunk = (cardsPack_id: string, page:number, pageCount:number) => (dispatch: Dispatch) => {
  cardsAPI.getCards(cardsPack_id, page, pageCount).then((res) => {
    dispatch(setCards(res.data.cards));
    dispatch(setPage(page))
    dispatch(setCardTotalCount(res.data.cardsTotalCount));
    console.log(res);
  });
};

export const addNewCard = (cardsPack_id: string, question: string, answer: string) => (dispatch: Dispatch) => {
  cardsAPI.addNewCard(cardsPack_id, question, answer).then((res) => {
    dispatch(addNewCards([res.data.newCard]));
  });
};

export const setGradeCard = (grade: number, card_id: string) => (dispatch: Dispatch) => {
  cardsAPI.setGreageCard(grade, card_id).then((res) => {
    console.log(res);
    // dispatch(setGrade(res.data.grade));
  });
};

//types

type ActionsType = ReturnType<typeof setCards>
    | ReturnType<typeof addNewCards>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setCardTotalCount>
    // | ReturnType<typeof setPageCount>
    | ReturnType<typeof setGrade>;
