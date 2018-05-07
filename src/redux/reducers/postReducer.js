/* reducers > postReducer */

import { FETCH_POST_ERROR, FETCH_POST_SUCCESS, FETCH_POST_LOADING } from '../actions/actionType';

const initialState = {
  postDt: [],
  isLoading: false,
  errorMsg: ''
};

const fetchPostError = (state, err) => ({
  ...state,
  errorMsg: err,
  isLoading: false
});

const fetchPostSuccess = (state, data) => ({
  ...state,
  errorMsg: '',
  isLoading: false,
  postDt: data
});

const fetchPostLoading = state => ({
  ...state,
  isLoading: true
});

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ERROR:
      return fetchPostError(state, action.payload);
    case FETCH_POST_SUCCESS:
      return fetchPostSuccess(state, action.payload);
    case FETCH_POST_LOADING:
      return fetchPostLoading(state);
    default:
      return state;
  }
};

export default postReducer;
