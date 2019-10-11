/* global gapi */
export const GET_THREADS_REQUEST = 'GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS = 'GET_THREADS_SUCCESS';

export function getThreads() {
  return (dispatch) => {
    dispatch({
      type: GET_THREADS_REQUEST,
    });

    gapi.client.load('https://content.googleapis.com/discovery/v1/apis/gmail/v1/rest')
      .then(() => {
          return gapi.client.gmail.users.threads.list({
            userId: 'me',
            maxResults: 20,
          })
        })
      .then((response) => {
        dispatch({
          type: GET_THREADS_SUCCESS,
          payload: {
            threads: response.result.threads,
          }
        });
      });
  }
}
