import { combineReducers } from "redux";
import { mainReducer } from "./reducers/main.reducer";

export const ReducersCollection = combineReducers({
  mainReducer,
});
