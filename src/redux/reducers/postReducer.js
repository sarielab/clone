/* reducers > postReducer */

import {
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  FETCH_POST_LOADING,
  ADD_POST_SUCCESS,
  ADD_POST_LOADING,
  ADD_POST_ERROR
} from '../actions/actionType';

const initialState = {
  postDt: [],
  isLoading: false,
  errorMsg: '',
  isUpdating: false
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

const addPostSuccess = (state, post) => ({
  ...state,
  isLoading: false,
  postDt: [...state.postDt].concat(post)
});
const addPostLoading = state => ({
  ...state,
  isLoading: true
});
const addPostError = (state, err) => ({
  ...state,
  isLoading: false,
  errorMsg: err
});

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ERROR:
      return fetchPostError(state, action.payload);
    case FETCH_POST_SUCCESS:
      return fetchPostSuccess(state, action.payload);
    case FETCH_POST_LOADING:
      return fetchPostLoading(state);
    case ADD_POST_SUCCESS:
      return addPostSuccess(state, action.payload);
    case ADD_POST_LOADING:
      return addPostLoading(state);
    case ADD_POST_ERROR:
      return addPostError(state, action.payload);

    default:
      return state;
  }
};

export default postReducer;
