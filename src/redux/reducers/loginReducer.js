/* redux > reducers> loginReducer.js */

import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/actionType';

const initialState = {
  loginDt: {},
  errorMsg: ''
};

const loginError = (state, err) => ({
  ...state,
  errorMsg: err
});

const loginSuccess = (state, data) => ({
  ...state,
  errorMsg: '',
  loginDt: data
});

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return loginError(state, action.payload);
    case LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    default:
      return state;
  }
};

export default loginReducer;
