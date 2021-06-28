import { Dispatch } from "redux";
import { API } from "../api/api";

const initState = {
    error: null as null | string,
    isFetching: false,
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
        default:
            return state;
    }
};

//actions
// export const forgotAC = (payload: SetRegisterUser) => ({ type: "FORGOT", payload } as const);
export const setError = (error: string | null) => ({ type: "SET-ERROR", error } as const);
export const toggleIsFetching = (isFetching: boolean) =>
    ({
        type: "TOGGLE_IS_FETCHING",
        isFetching,
    } as const);

//thunk

export const forgotThunk = (email: string, from: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    API.forgot(email,from)
        .then((res) => {
            dispatch(toggleIsFetching(false));
            // dispatch(forgotAC({ email,from}));
            console.log(res);
        })
        .catch((err) => {
            dispatch(toggleIsFetching(false));
            const error = err.response ? err.response.data.error : err.message + "some error";
            dispatch(setError(error));
        });
};

//types
type ActionsType =  ReturnType<typeof setError> | ReturnType<typeof toggleIsFetching>;

type initialStateType = typeof initState;
//
// type SetRegisterUser = {
//     email: string;
//    from: string;
//     // message: string
// };
