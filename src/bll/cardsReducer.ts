import { Dispatch } from "redux";
import { cardsAPI, CardsType } from "../api/api";

const initialState: Array<CardsType> = [];

export const cardsReducer = (state: any = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET-CARDS": {
      return action.cards;
    }
    case "ADD-NEW-CARD": {
      return [...action.cards, ...state];
    }
    default:
      return state;
  }
};

//actions
const setCards = (cards: Array<CardsType>) => ({ type: "SET-CARDS", cards } as const);
const addNewCards = (cards: Array<CardsType>) => ({ type: "ADD-NEW-CARD", cards } as const);

//thunk
export const fetchCardsThunk = () => (dispatch: Dispatch) => {
  cardsAPI.getCards().then((res) => {
    dispatch(setCards(res.data.cards));
  });
};

export const addNewCard = (cardsPack_id: string, question: string, answer: string) => (dispatch: Dispatch) => {
  cardsAPI.addNewCard(cardsPack_id, question, answer).then((res) => {
    dispatch(addNewCards([res.data.newCard]));
  });
};

//types

type ActionsType = ReturnType<typeof setCards> | ReturnType<typeof addNewCards>;
