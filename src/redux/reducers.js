import { combineReducers } from "redux";
import posts from './posts/reducers';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;