/* redux > actions> postAction.js */
import Axios from 'axios';

import { FETCH_POST, FETCH_POST_ERROR, FETCH_POST_SUCCESS, FETCH_POST_LOADING } from './actionType';

const BASE_URL = 'http://localhost:3000/api';

export const fetchPostLoading = () => ({
  type: FETCH_POST_LOADING
});

export const fetchPostSuccess = data => ({
  type: FETCH_POST_SUCCESS,
  payload: data
});

export const fetchPostError = err => ({
  type: FETCH_POST_ERROR,
  payload: err.toString()
});

export const fetchPost = () => dispatch => {
  dispatch(fetchPostLoading());
  Axios.get(`${BASE_URL}/posts`)
    .then(res => {
      dispatch(fetchPostSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchPostError(err));
    });
};
