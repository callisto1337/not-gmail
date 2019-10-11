import {
  GET_THREADS_REQUEST,
  GET_THREADS_SUCCESS,
} from "../actions/mailAction";

export const initialState = {
  threadsIsLoading: null,
  threads: [],
};

export function mailReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_THREADS_REQUEST:
      return {
        ...state,
        threadsIsLoading: true,
      };
    case GET_THREADS_SUCCESS:
      return {
        ...state,
        threadsIsLoading: false,
        threads: payload.threads,
      };
    default:
      return state
  }
}
