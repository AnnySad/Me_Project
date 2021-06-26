import { Dispatch } from "redux";
import { API } from "../api/api";

const initState = {
  email: "",
  password: "",
  isRegistred: false,
  error: null as null | string,
  isFetching: false,
};

export const registredReducer = (state: initialStateType = initState, action: ActionsType): typeof initState => {
  switch (action.type) {
    case "REGISTRED": {
      return {
        ...state,
        ...action.payload,
      };
    }
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
    default:
      return state;
  }
};

//actions
export const registredAC = (payload: SetRegisterUser) => ({ type: "REGISTRED", payload } as const);
export const setError = (error: string | null) => ({ type: "SET-ERROR", error } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: "TOGGLE_IS_FETCHING",
    isFetching,
  } as const);

//thunk

export const checkInThunk = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  API.checkIn(email, password)
    .then((res) => {
      dispatch(toggleIsFetching(false));
      dispatch(registredAC({ email, password, isRegistred: true }));
      console.log(res);
    })
    .catch((err) => {
      dispatch(toggleIsFetching(false));
      const error = err.response ? err.response.data.error : err.message + "some error";
      dispatch(setError(error));
    });
};

//types
type ActionsType = ReturnType<typeof registredAC> | ReturnType<typeof setError> | ReturnType<typeof toggleIsFetching>;

type initialStateType = typeof initState;

type SetRegisterUser = {
  email: string;
  password: string;
  isRegistred: boolean;
};
