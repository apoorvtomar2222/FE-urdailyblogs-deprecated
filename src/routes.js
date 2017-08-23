import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/post_index';
import PostArticle from './containers/post_article';






export default(
        <Route path="/" component={App} >
             <IndexRoute component={PostsIndex}/>
             <Route path="articles/:id" component={PostArticle}/>   
       </Route>

) 