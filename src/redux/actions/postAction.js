/* redux > actions> postAction.js */
import Axios from 'axios';

import {
  FETCH_POST,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  FETCH_POST_LOADING,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_LOADING,
  ADD_POST_ERROR
} from './actionType';

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

export const addPost = post => dispatch => {
  const { userId, id, isi } = post;
  const data = { userId, isi };
  dispatch(addPostLoading());

  Axios.post(`${BASE_URL}/posts?access_token=${id}`, data)
    .then(res => {
      dispatch(addPostSuccess(res.data));
    })
    .catch(err => {
      console.log(JSON.parse(err));
      console.log(err.message);
      dispatch(addPostError(err));
    });
};

export const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  payload: post
});

export const addPostLoading = () => ({
  type: ADD_POST_LOADING
});

export const addPostError = err => ({
  type: ADD_POST_ERROR,
  payload: err.toString()
});
