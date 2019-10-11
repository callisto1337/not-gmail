import React from 'react';
import PropTypes from 'prop-types';
import AppLoader from './AppLoader';
import Header from './Header';
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
    const { props } = this;
    const { isLoading } = props.app;
    const { handleLogin, handleLogout } = props;
    const { profile, isSignedIn } = props.user;
    const { threads, threadsIsLoading } = props.mail;

    if (isLoading) {
      return <AppLoader />;
    } if (isSignedIn) {
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
    }
    return <Login handleLogin={handleLogin} />;
  }
}

App.propTypes = {
  app: PropTypes.shape({
    isLoading: PropTypes.bool,
  }).isRequired,
  user: PropTypes.shape({
    profile: PropTypes.object,
    isSignedIn: PropTypes.bool,
  }).isRequired,
  mail: PropTypes.shape({
    threads: PropTypes.array,
    threadsIsLoading: PropTypes.bool,
  }).isRequired,
  toggleLoaderVisibility: PropTypes.func.isRequired,
  initApp: PropTypes.func.isRequired,
  updateUserData: PropTypes.func.isRequired,
  handlerChangeSignInStatus: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
