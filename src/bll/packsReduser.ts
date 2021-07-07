import { Dispatch } from "redux";
import { CardPacksType, packsAPI } from "../api/api";

const initialState: Array<CardPacksType> = [];

export const packsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET-PACKS": {
      return action.packs;
    }
    case "ADD-PACK-TITLE": {
      return [...action.packs, ...state];
    }
    case "REMOVE-PACK": {
      return state.filter((p) => p._id !== action.id);
    }
    case " UPDATED-CARDS-PACK": {
      let newPackTitle = state.find((p) => p._id === action.id);
      if (newPackTitle) {
        newPackTitle.name = action.title;
      }
      return [...state];
    }
    default:
      return state;
  }
};

//actions
const setPacks = (packs: Array<CardPacksType>) => ({ type: "SET-PACKS", packs } as const);
const addPackTitle = (packs: any) => ({ type: "ADD-PACK-TITLE", packs } as const);
const removePack = (id: string) => ({ type: "REMOVE-PACK", id } as const);
const updatedCardsPack = (id: string, title: string) => ({ type: " UPDATED-CARDS-PACK", id, title } as const);

//thunk
export const fetchPacksThunk = () => (dispatch: Dispatch) => {
  packsAPI
    .getPacks()
    .then((res) => {
      dispatch(setPacks(res.data.cardPacks));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addNewPack = (title: string) => (dispatch: Dispatch) => {
  packsAPI.addNewPack(title).then((res) => {
    dispatch(addPackTitle(title));
  });
};

export const deletePack = (id: string) => (dispatch: Dispatch) => {
  packsAPI.deletePack(id).then((res) => {
    dispatch(removePack(id));
  });
};

export const updatedPacksTitle = (id: string, title: string) => (dispatch: Dispatch) => {
  packsAPI.updatedCardsPack(id, title).then((res) => {
    dispatch(updatedCardsPack(id, title));
  });
};

type ActionsType =
  | ReturnType<typeof setPacks>
  | ReturnType<typeof addPackTitle>
  | ReturnType<typeof removePack>
  | ReturnType<typeof updatedCardsPack>;
