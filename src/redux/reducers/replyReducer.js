/* reducers > replyReducer */

import {
  FETCH_REPLY_ERROR,
  FETCH_REPLY_SUCCESS,
  FETCH_REPLY_LOADING,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_LOADING,
  ADD_REPLY_ERROR
} from '../actions/actionType';

const initialState = {
  replyDt: [],
  isLoading: false,
  errorMsg: '',
  isUpdating: false
};

const fetchReplyError = (state, err) => ({
  ...state,
  errorMsg: err,
  isLoading: false
});

const fetchReplySuccess = (state, data) => ({
  ...state,
  errorMsg: '',
  isLoading: false,
  replyDt: data
});

const fetchReplyLoading = state => ({
  ...state,
  isLoading: true
});

const addReplySuccess = (state, reply) => ({
  ...state,
  isLoading: false,
  replyDt: [...state.replyDt].concat(reply)
});
const addReplyLoading = state => ({
  ...state,
  isLoading: true
});
const addReplyError = (state, err) => ({
  ...state,
  isLoading: false,
  errorMsg: err
});

const replyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPLY_ERROR:
      return fetchReplyError(state, action.payload);
    case FETCH_REPLY_SUCCESS:
      return fetchReplySuccess(state, action.payload);
    case FETCH_REPLY_LOADING:
      return fetchReplyLoading(state);
    case ADD_REPLY_SUCCESS:
      return addReplySuccess(state, action.payload);
    case ADD_REPLY_LOADING:
      return addReplyLoading(state);
    case ADD_REPLY_ERROR:
      return addReplyError(state, action.payload);

    default:
      return state;
  }
};

export default replyReducer;
