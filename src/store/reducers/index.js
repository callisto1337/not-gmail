import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { userReducer } from './userReducer';
import { mailReducer } from './mailReducer';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  mail: mailReducer,
});
