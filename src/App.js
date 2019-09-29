/* global gapi */
import React from 'react';
import credentials from './configs/credentials';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isSignedIn: false,
      auth2: null,
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
    const loader = <div>Загрузка</div>;
    const signIn = <button onClick={this.handleAuthClick}>Войти</button>;
    const signOut = <div>
      <button onClick={this.handleSignOutClick}>Выйти</button>
    </div>;

    if (this.state.loading) {
      return loader;
    } else if (this.state.isSignedIn) {
      return signOut;
    }

    return signIn;

  }
}

export default App;
