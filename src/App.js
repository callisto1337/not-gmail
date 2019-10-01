/* global gapi */
import React from 'react';
import { credentials } from './configs';
import AppLoader from "./AppLoader";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isSignedIn: false,
      auth2: null,
      profile: null,
    };

    gapi.load('client:auth2', this.initApp);
  }

  initApp = () => {
    const auth2 = gapi.auth2.init({
      clientId: credentials.CLIENT_ID,
    });

    this.setState({auth2});

    auth2.then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
      this.updateSignInStatus();
      this.setState({loading: false});
    });
  }

  setProfile() {
    const profile = this.state.auth2.currentUser.get().getBasicProfile();

    this.setState({
      profile: {
        id: profile.getId(),
        fullName: profile.getName(),
        email: profile.getEmail(),
      }
    })
  }

  updateSignInStatus = () => {
    const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

    if (isSignedIn) {
      this.setProfile();
      this.initClient();
    } else {
      this.setState({
        profile: {},
      })
    }

    this.setState({isSignedIn});
  }

  handleAuthClick = () => {
    this.state.auth2.signIn()
      .then(() => {
        this.updateSignInStatus();
      });
  }

  handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut()
      .then(() => {
        this.updateSignInStatus();
      });
  }

  initClient() {
    gapi.client.load("https://content.googleapis.com/discovery/v1/apis/gmail/v1/rest");
  }

  render() {
    if (this.state.loading) {
      return <AppLoader/>;
    }

    return (
      <Header
        isSignedIn={this.state.isSignedIn}
        handleSignOutClick={this.handleSignOutClick}
        handleAuthClick={this.handleAuthClick}
        fullName={this.state.profile.fullName}
      />
    );
  }
}

export default App;
