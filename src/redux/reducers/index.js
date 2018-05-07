/* redux> reducers> index.js */
import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  post: postReducer
});

export default rootReducer;
