import {setPacksType} from "./packsReduser";
import {CardPacksType} from "../api/api";

// const initialState = '' as string;
const initialState = {
}

type initialStateType= typeof initialState
// type initialStateType= any

export const filterReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FILTER-PACKS": {
            return {name: action.payload}
        }

        // case "SET-PACKS": {
        //    return action.packs.filter(pack => pack.name && pack.name.includes(name))
        // }
        default:
            return state;
    }
};

//ac
export const filterPacks= (name: string) => ({ type: "FILTER-PACKS",payload:name } as const);

//th

// export const findPack = (page: number, pageCount: number, name:string) => (dispatch: ThunkType) => {
//     dispatch(fetchPacksThunk(page, pageCount)).then(() => {
//         dispatch(filterPacks(name));
//     });
// };




type ActionsType = ReturnType<typeof filterPacks> | setPacksType