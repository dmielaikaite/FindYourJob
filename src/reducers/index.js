import { combineReducers } from 'redux'
import { user,userHasError  } from './userLogin.js';

export default combineReducers({
    user,
    userHasError
});
