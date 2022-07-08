import {
  POSTS_GET_REQUEST,
  POSTS_GET_SUCCESS,
  POSTS_GET_ERROR,
  POSTS_SEARCH,
  POSTS_SORT,
  POSTS_CURRENT_PAGE,
} from '../actions';

const INIT_STATE = {
  posts: [],
  valueSearch: '',
  loading: false,
  error: null,
  typeSort: null, 
  keySort: null,
  currentPage: 1,
  perPage: 0,
  totalCount: 0
};

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case POSTS_GET_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        totalCount: action.payload.totalCount,
        perPage: Math.ceil(action.payload.length / 10),
      };

    case POSTS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POSTS_GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case POSTS_SEARCH:
      return {
        ...state,
        valueSearch: action.payload,
      };

    case POSTS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case POSTS_SORT:   
      const copyData = [...state.posts];
      const typeSort = action.typeSort;
      const keySort = action.keySort;
      
      const sortedData = copyData.sort(
        (a, b) => {
          const A = typeof a[keySort] === 'string' ? a[keySort][0] : a[keySort];
          const B = typeof b[keySort] === 'string' ? b[keySort][0] : b[keySort];
          
          if (typeSort === 'ASC') {
            return A > B ? 1 : -1
          }
          if (typeSort === 'DESC') {
            return A < B ? 1 : -1
          }
          if (typeSort === null) {
            return A > B ? 1 : -1
          }
          return 1;
        });
        
      return {
        ...state,
        posts: sortedData,
        typeSort,
        keySort,
      };

      default:
        return state
  }
};

export default posts;

