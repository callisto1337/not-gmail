import React from 'react';
import AppLoader from '../components/AppLoader';
import Header from '../components/Header';
import Login from './Login';
import Mail from './Mail';

class App extends React.Component {
  constructor(props) {
    super(props);

    const {
      toggleLoaderVisibility,
      initApp,
      updateUserData,
      handlerChangeSignInStatus,
    } = this.props;

    toggleLoaderVisibility(true);
    initApp(() => {
      handlerChangeSignInStatus();
      updateUserData();
      toggleLoaderVisibility(false);
    });
  }

  render() {
    const {isLoading} = this.props.app;
    const {handleLogin, handleLogout} = this.props;
    const {profile, isSignedIn} = this.props.user;
    const {threads, threadsIsLoading} = this.props.mail;

    if (isLoading) {
      return <AppLoader/>;
    } else if (isSignedIn) {
      return (
        <div>
          <Header
            fullName={profile.fullName}
            handleLogout={handleLogout}
          />
          <Mail
            threads={threads}
            threadsIsLoading={threadsIsLoading}
          />
        </div>
      );
    } else {
      return <Login handleLogin={handleLogin}/>;
    }
  }
}

export default App;
