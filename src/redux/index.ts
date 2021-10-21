import { compose, createStore, applyMiddleware } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { MainReducers } from "./reducers";

export const store = createStore(MainReducers, compose(applyMiddleware(thunk)));

export type StateInterface = ReturnType<typeof store.getState>;

export interface Action<T = string> {
  type: "UPDATE_HEADER_STATE";
  payload: Partial<T>;
}

export type Dispatch<A> = ThunkDispatch<StateInterface, Record<string, unknown>, Action<A>>;
