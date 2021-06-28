import { Dispatch } from "redux";
import { API, authAPI } from "../api/api";

const initState = {
  _id: null as null | string,
  name: null as null | string,
  email: null as null | string,
  isAuth: false,
};

export const authReducer = (state: initialStateType = initState, action: ActionsType): typeof initState => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

//actions
export const setUserData = (payload: initialStateType) => ({ type: "SET-USER-DATA", payload } as const);

//thunk

export const authThunk = () => (dispatch: Dispatch) => {
  authAPI.authMe().then((res) => {
    let { _id, name, email } = res.data;
    dispatch(setUserData({ _id, name, email, isAuth: true }));
    console.log("payload: ", { _id, name, email });
  });
};

//types
type ActionsType = ReturnType<typeof setUserData>;
type initialStateType = typeof initState;
