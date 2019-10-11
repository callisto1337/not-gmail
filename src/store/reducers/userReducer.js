import {
  UPDATE_USER_DATA,
} from '../actions/userAction';

export const initialState = {
  profile: {},
  isSignedIn: false,
};

export function userReducer(state = initialState, {type, payload}) {
  if (type === UPDATE_USER_DATA) {
    return {
      ...state,
      ...payload,
    };
  } else {
    return state
  }
}
