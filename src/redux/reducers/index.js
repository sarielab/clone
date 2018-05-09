/* redux> reducers> index.js */
import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import postReducer from './postReducer';
// import replyReducer from './replyReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  post: postReducer
  // reply: replyReducer
});

export default rootReducer;
