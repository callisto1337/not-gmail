import App from '../components/App';
import { connect } from 'react-redux';
import { initApp, toggleLoaderVisibility } from '../store/actions/appAction';
import {
  updateUserData,
  handleLogin,
  handleLogout,
  handlerChangeSignInStatus,
} from '../store/actions/userAction';

const mapStateToProps = ({app, user}) => {
  return {
    app,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initApp: (callback) => dispatch(initApp(callback)),
    toggleLoaderVisibility: (status) => dispatch(toggleLoaderVisibility(status)),
    updateUserData: () => dispatch(updateUserData()),
    handleLogin: () => dispatch(handleLogin()),
    handleLogout: () => dispatch(handleLogout()),
    handlerChangeSignInStatus: () => dispatch(handlerChangeSignInStatus()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
