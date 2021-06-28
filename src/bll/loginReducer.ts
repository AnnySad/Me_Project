import {API} from "../api/api";
import {Dispatch} from "redux";

const initState = {
    email: "",
    password: "",
    isLogined: false,
    error: null as null | string,
    isFetching: false,
}

export const loginReducer = (state: initialStateType = initState, action:LoginActionType): typeof initState => {
    switch (action.type) {
        case "LOGIN": {
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
        default: return state
    }
}

//actions
export const loginAC = (payload: LoginUserType) => ({ type: "LOGIN", payload } as const);
export const setError = (error: string | null) => ({ type: "SET-ERROR", error } as const);
export const toggleIsFetching = (isFetching: boolean) =>
    ({
        type: "TOGGLE_IS_FETCHING",
        isFetching,
    } as const);


//thunk
export const onClickLoginThunk = (email: string, password: string,
                                  checked:boolean) => (dispatch: Dispatch) => {

    dispatch(toggleIsFetching(true));
    API.createLogin(email, password, false)
        .then((res) => {
            dispatch(toggleIsFetching(false));
            dispatch(loginAC(<LoginUserType>{isLogined: true}));
            console.log(res)
        })
        .catch((err) => {
            dispatch(toggleIsFetching(false));
            const error = err.response ? err.response.data.error : err.message + "some error";
            dispatch(setError(error));
        });
}


//types
type LoginActionType =ReturnType<typeof loginAC> | ReturnType<typeof setError> | ReturnType<typeof toggleIsFetching>;

type initialStateType = typeof initState;

type LoginUserType={
    email:string,
    password:string,
    checked:boolean,
    isLogined: boolean
}

