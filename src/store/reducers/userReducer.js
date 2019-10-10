import { UPDATE_USER_DATA } from "../actions/userAction";

export const initialState = {
  profile: {},
  isSignedIn: false,
};

export function userReducer(state = initialState, {type, payload}) {
  switch (type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state
  }
}
