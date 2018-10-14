import { combineReducers } from 'redux'
import { user,userHasError  } from './userLogin.js';
import { news, newsHasRerrored } from './allNews.js';

export default combineReducers({
    user,
    userHasError,
    news,
    newsHasRerrored
});
