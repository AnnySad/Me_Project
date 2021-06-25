import { createStore } from "redux"
import { combineReducers } from "redux"

const reducers = combineReducers({


})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>