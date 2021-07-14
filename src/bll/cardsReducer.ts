import { Dispatch } from "redux";
import { cardsAPI, CardsType } from "../api/api";

// const initialState: Array<CardsType> = [];
const initialState = {
  cards: [] as Array<CardsType>,
  grade: 0,
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

    default:
      return state;
  }
};

//actions
const setCards = (cards: Array<CardsType>) => ({ type: "SET-CARDS", cards } as const);
const addNewCards = (cards: Array<CardsType>) => ({ type: "ADD-NEW-CARD", cards } as const);
const setGrade = (grade: number) => ({ type: "SET-GRADE", grade } as const);

//thunk
export const fetchCardsThunk = (cardsPack_id: any) => (dispatch: Dispatch) => {
  cardsAPI.getCards(cardsPack_id).then((res) => {
    dispatch(setCards(res.data.cards));
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

type ActionsType = ReturnType<typeof setCards> | ReturnType<typeof addNewCards> | ReturnType<typeof setGrade>;
