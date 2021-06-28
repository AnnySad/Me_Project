import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { registredReducer } from "./registredReduser";
import {forgotReducer} from "./forgotReduser";

const reducers = combineReducers({
  register: registredReducer,
  forgot:forgotReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof reducers>;
