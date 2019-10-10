import React from 'react';
import AppLoader from "../components/AppLoader";
import Header from "../components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    const {
      toggleLoaderVisibility,
      initApp,
      updateUserData,
    } = this.props;

    toggleLoaderVisibility(true);
    initApp(() => {
      updateUserData();
      toggleLoaderVisibility(false);
    });
  }

  render() {
    const {isLoading} = this.props.app;
    const {handleLogin, handleLogout} = this.props;
    const {profile, isSignedIn} = this.props.user;

    if (isLoading) {
      return <AppLoader/>;
    }

    return (
      <Header
        isSignedIn={isSignedIn}
        fullName={profile.fullName}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    )
  }
}

export default App;
