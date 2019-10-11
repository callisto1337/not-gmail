/* global gapi */
import { getThreads } from './mailAction';

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export function updateUserData() {
  return (dispatch, getState) => {
    const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    const action = {
      type: UPDATE_USER_DATA,
      payload: {
        profile: {},
        isSignedIn,
      },
    };

    if (isSignedIn) {
      const { app } = getState();
      const profile = app.auth2.currentUser.get().getBasicProfile();

      action.payload.profile = {
        id: profile.getId(),
        fullName: profile.getName(),
        email: profile.getEmail(),
      };
      dispatch(getThreads());
    }

    dispatch(action);
  };
}

export function handlerChangeSignInStatus() {
  return (dispatch) => {
    gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
      dispatch(updateUserData());
    });
  };
}

export function handleLogin() {
  return (dispatch, getState) => {
    getState().app.auth2.signIn();
  };
}

export function handleLogout() {
  return () => {
    gapi.auth2.getAuthInstance().signOut();
  };
}
