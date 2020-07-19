import { combineReducers } from "redux";
import { getUsersReducer } from "./reducers/getUsersReducer";

export const rootReducer = combineReducers(
  {
    users: getUsersReducer
  }
)