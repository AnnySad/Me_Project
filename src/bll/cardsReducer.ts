import { Dispatch } from "redux";
import { cardsAPI, CardsType } from "../api/api";

const initialState: Array<CardsType> = [];

export const cardsReducer = (state: any = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET-CARDS": {
      return action.cards;
    }
    default:
      return state;
  }
};

//actions
const setCards = (cards: Array<CardsType>) => ({ type: "SET-CARDS", cards } as const);
// const addNewCards = (cards: cards: Array<CardsType>)

//thunk
export const fetchCardsThunk = () => (dispatch: Dispatch) => {
  cardsAPI.getCards().then((res) => {
    dispatch(setCards(res.data.cards));
  });
};

//types

type ActionsType = ReturnType<typeof setCards>;
