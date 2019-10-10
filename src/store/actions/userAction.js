/* global gapi */
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export function updateUserData() {
  return (dispatch, getState) => {
    const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    const action = {
      type: UPDATE_USER_DATA,
      payload: {
        profile: {},
        isSignedIn,
      }
    };

    if (isSignedIn) {
      const {app} = getState();
      const profile = app.auth2.currentUser.get().getBasicProfile();

      action.payload.profile = {
        id: profile.getId(),
        fullName: profile.getName(),
        email: profile.getEmail(),
      }
    }

    dispatch(action);
  }
}

export function handleLogin() {
  return (dispatch, getState) => {
    const {app} = getState();

    app.auth2.signIn()
      .then(() => {
        dispatch(updateUserData());
      });
  }
}

export function handleLogout() {
  return (dispatch) => {
    gapi.auth2.getAuthInstance().signOut()
      .then(() => {
        dispatch(updateUserData());
      });
  }
}
