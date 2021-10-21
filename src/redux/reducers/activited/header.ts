import { Action } from "../..";

export interface HeaderReducer {
  navbar_activated: boolean;
  projects_side: boolean;
}

export const header = (
  state: HeaderReducer = {
    navbar_activated: true,
    projects_side: false,
  },
  action: Action<HeaderReducer>,
): HeaderReducer => {
  switch (action.type) {
    case "UPDATE_HEADER_STATE":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
