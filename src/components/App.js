import React from 'react';
import AppLoader from "../components/AppLoader";
import Header from "../components/Header";
import Login from "./Login";

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
      updateUserData();
      handlerChangeSignInStatus();
      toggleLoaderVisibility(false);
    });
  }

  render() {
    const {isLoading} = this.props.app;
    const {handleLogin, handleLogout} = this.props;
    const {profile, isSignedIn} = this.props.user;

    if (isLoading) {
      return <AppLoader/>;
    } else if (isSignedIn) {
      return (
        <Header
          fullName={profile.fullName}
          handleLogout={handleLogout}
        />
      );
    } else {
      return <Login handleLogin={handleLogin} />
    }
  }
}

export default App;
