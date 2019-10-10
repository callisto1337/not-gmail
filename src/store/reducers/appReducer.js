import { INIT_APP, TOGGLE_LOADER_VISIBILITY } from "../actions/appAction";

export const initialState = {
  isLoading: false,
  auth2: null,
};

export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_APP:
      return {
        ...state,
        auth2: payload.auth2,
      };
    case TOGGLE_LOADER_VISIBILITY:
      return {
        ...state,
        isLoading: payload.status,
      };
    default:
      return state
  }
}
