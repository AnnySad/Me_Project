import { Dispatch } from "redux";
import { API } from "../api/api";
import { toggleIsFetching } from "./registredReduser";

const initState = {
  error: null as null | string,
  isFetching: false,
  isNewPasswordSet: false,
};

export const forgotReducer = (state: initialStateType = initState, action: ActionsType): typeof initState => {
  switch (action.type) {
    case "SET-ERROR":
      return {
        ...state,
        error: action.error,
      };

    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case "IS-NEW-PASSWORD-SET":
      return {
        ...state,
        isNewPasswordSet: action.val,
      };
    default:
      return state;
  }
};

//actions
export const setError = (error: string | null) => ({ type: "SET-ERROR", error } as const);
const isNewPasswordSet = (val: boolean) => ({ type: "IS-NEW-PASSWORD-SET", val } as const);

//thunk

export const forgotThunk = (email: string, from: string) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  API.forgot(email, from)
    .then((res) => {
      dispatch(toggleIsFetching(false));
      console.log(res);
    })
    .catch((err) => {
      dispatch(toggleIsFetching(false));
      const error = err.response ? err.response.data.error : err.message + "some error";
      dispatch(setError(error));
    });
};

export const setNewPasswordThunk = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  API.setNewPassword(password, resetPasswordToken)
    .then((res) => {
      dispatch(toggleIsFetching(false));
      dispatch(isNewPasswordSet(true));
    })
    .catch((err) => {
      dispatch(toggleIsFetching(false));
      const error = err.response ? err.response.data.error : err.message + "some error";
      dispatch(setError(error));
    });
};

//types
type ActionsType =
  | ReturnType<typeof setError>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof isNewPasswordSet>;
type initialStateType = typeof initState;
