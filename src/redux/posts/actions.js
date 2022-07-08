import { axios } from '../../services';

import {
  POSTS_GET_REQUEST,
  POSTS_GET_SUCCESS,
  POSTS_GET_ERROR,
  POSTS_SEARCH,
  POSTS_SORT,
  POSTS_CURRENT_PAGE,
} from '../actions';

const getPostsRequested = () => ({
  type: POSTS_GET_REQUEST
});

const getPostsSuccess = (data) => ({
  type: POSTS_GET_SUCCESS,
  payload: data
});

const getPostsError = (error) => ({
  type: POSTS_GET_ERROR,
  payload: error
});

const postsSearch = (searchValue) => ({
  type: POSTS_SEARCH,
  payload: searchValue
});

const sortPosts = (typeSort, keySort) => ({
  type: POSTS_SORT,
  typeSort, 
  keySort,
});

const postsCurrentPage = (page) => ({
  type: POSTS_CURRENT_PAGE,
  payload: page
});

const getPosts = (valueSearch) => (dispatch) => {
  dispatch(getPostsRequested());
  axios.get(`/posts?`, {
    params: {
      q: valueSearch
    },
  }).then((response) => {
    dispatch(getPostsSuccess(response.data));
    })
      .catch((error) => {
        dispatch(getPostsError(error));
      })
};

export {
  getPosts,
  sortPosts,
  postsSearch,
  getPostsSuccess,
  postsCurrentPage,
};