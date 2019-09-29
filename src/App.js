/* global gapi */
import React from 'react';
import credentials from './configs/credentials';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    }
  }

  componentDidMount() {
    this.handleClientLoad();
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }

  updateSignInStatus = () => {
    const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

    if (isSignedIn) {
      const profile = this.state.auth2.currentUser.get().getBasicProfile();
      this.setState({
        profile: {
          id: profile.getId(),
          fullName: profile.getName(),
          email: profile.getEmail(),
        }
      })
    } else {
      this.setState({profile: null})
    }

    this.setState({isSignedIn});
  }

  initClient = () => {
    this.setState({
      auth2: gapi.auth2.init({
        apiKey: credentials.API_KEY,
        clientId: credentials.CLIENT_ID,
        discoveryDocs: credentials.DISCOVERY_DOCS,
        scope: credentials.SCOPES
      }),
    });

    this.state.auth2
      .then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
        this.updateSignInStatus();
        this.setState({loading: false});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAuthClick = () => {
    this.state.auth2.signIn().then(() => {
      this.updateSignInStatus();
    });
  }

  handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      this.updateSignInStatus();
    });
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
        {...this.state.profile}
      />
    );
  }
}

export default App;
