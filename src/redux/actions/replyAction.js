/* redux > actions> replyAction.js */
import Axios from 'axios';
import { replyNotif } from '../../helpers/request';

import {
  FETCH_REPLY,
  FETCH_REPLY_ERROR,
  FETCH_REPLY_SUCCESS,
  FETCH_REPLY_LOADING,
  ADD_REPLY,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_LOADING,
  ADD_REPLY_ERROR
} from './actionType';

const BASE_URL = 'http://localhost:3000/api/posts';

export const fetchReplyLoading = () => ({
  type: FETCH_REPLY_LOADING
});

export const fetchReplySuccess = data => ({
  type: FETCH_REPLY_SUCCESS,
  payload: data
});

export const fetchReplyError = err => ({
  type: FETCH_REPLY_ERROR,
  payload: err.toString()
});

export const fetchReply = postId => dispatch => {
  dispatch(fetchReplyLoading());
  Axios.get(`${BASE_URL}/${postId}/replies`)
    .then(res => {
      dispatch(fetchReplySuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchReplyError(err));
    });
};

export const addReply = reply => dispatch => {
  const {
    userId, id: access_token, isi, postId
  } = reply;
  const data = { userId, isi, postId };
  dispatch(addReplyLoading());
  // replyNotif(data);

  Axios.reply(`${BASE_URL}/${postId}/replies?access_token=${access_token}`, data)
    .then(res => {
      dispatch(addReplySuccess(res.data));
    })
    .catch(err => {
      console.log(JSON.parse(err));
      console.log(err.message);
      dispatch(addReplyError(err));
    });
};

export const addReplySuccess = reply => ({
  type: ADD_REPLY_SUCCESS,
  payload: reply
});

export const addReplyLoading = () => ({
  type: ADD_REPLY_LOADING
});

export const addReplyError = err => ({
  type: ADD_REPLY_ERROR,
  payload: err.toString()
});
