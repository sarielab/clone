/* redux > actions> login.js */
import Axios from 'axios';

import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './actionType';

const BASE_URL = 'http://localhost:3000/api';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginError = err => ({
  type: LOGIN_ERROR,
  payload: err.toString()
});

export const login = data => dispatch => {
  Axios.post(`${BASE_URL}/users/login`, data)
    .then(res => {
      dispatch(loginSuccess(res.data));
    })
    .catch(err => {
      dispatch(loginError(err));
    });
};
