import { Dispatch } from "redux";
import { CardPacksType, packsAPI } from "../api/api";

// const initialState: Array<CardPacksType> = [];

const initialState = {
  packs: [] as Array<CardPacksType>,
  page: 1,
  pageCount: 10,
  cardPackTotalCount: 100,
  packsName: ''
};

type initialStateType = typeof initialState;

export const packsReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "SET-PACKS": {
      return {
        ...state,
        packs: [...action.packs],
      };
    }
    case "ADD-PACK-TITLE": {
      return {
        ...state,
        packs: [...action.packs, ...state.packs],
      };
    }
    case "REMOVE-PACK": {
      return {
        ...state,
        packs: state.packs.filter((p) => p._id !== action.id),
      };
    }
    case " UPDATED-CARDS-PACK": {
      let newPackTitle = state.packs.find((p) => p._id === action.id);
      if (newPackTitle) {
        newPackTitle.name = action.title;
      }
      return { ...state };
    }
    case "SET-PAGE": {
      return {
        ...state,
        page: action.page,
      };
    }
    case "SET-CARD-PACK-TOTAL-COUNT": {
      return {
        ...state,
        cardPackTotalCount: action.cardPackTotalCount,
      };
    }
    case 'SET-FILTER-PACKS-NAME': {
      return {
        ...state,
        packsName: action.name
      };
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
const setPage = (page: number) => ({ type: "SET-PAGE", page } as const);
export const setFilterPacksName = (name: string) => ({ type: "SET-FILTER-PACKS-NAME", name } as const);
const setCardPackTotalCount = (cardPackTotalCount: number) =>
  ({ type: "SET-CARD-PACK-TOTAL-COUNT", cardPackTotalCount } as const);

//thunk
export const fetchPacksThunk = (page: number, pageCount: number, packName?: string) => (dispatch: Dispatch) => {
  packsAPI
    .getPacks(page, pageCount, packName)
    .then((res) => {
      dispatch(setPacks(res.data.cardPacks));
      dispatch(setPage(page));
      // dispatch(setFilterPacksName(packName));
      dispatch(setCardPackTotalCount(res.data.cardPacksTotalCount));
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
  | ReturnType<typeof updatedCardsPack>
  | ReturnType<typeof setCardPackTotalCount>
  | ReturnType<typeof setFilterPacksName>
  | ReturnType<typeof setPage>;

export type setPacksType = ReturnType<typeof setPacks>