import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { registredReducer } from "./registredReduser";

const reducers = combineReducers({
  register: registredReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof reducers>;
