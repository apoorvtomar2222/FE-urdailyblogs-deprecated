import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import ArticlesReducer from './reducer_article';

const rootReducer = combineReducers({
      posts: PostsReducer,
      article:ArticlesReducer
});


export default rootReducer;
