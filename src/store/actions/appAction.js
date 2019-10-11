/* global gapi */
import credentials from '../../configs/credentials';

export const INIT_APP = 'INIT_APP';
export const TOGGLE_LOADER_VISIBILITY = 'TOGGLE_LOADER_VISIBILITY';

export function initApp(callback) {
  return (dispatch) => {
    gapi.load('client:auth2', () => {
      const auth2 = gapi.auth2.init({
        clientId: credentials.CLIENT_ID,
      });

      auth2.then(() => {
        dispatch({
          type: INIT_APP,
          payload: {
            auth2,
          },
        });
        callback();
      });
    });
  };
}

export function toggleLoaderVisibility(status) {
  return {
    type: TOGGLE_LOADER_VISIBILITY,
    payload: {
      status,
    },
  };
}
