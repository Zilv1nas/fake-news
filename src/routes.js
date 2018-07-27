import React from 'react';
import { Switch, Route } from 'react-router';
import { PostList, PostDetails } from './components/posts';

const routes = (
  <Switch>
    <Route path="/" exact component={PostList} />
    <Route path="/posts/:id" exact component={PostDetails} />
    <Route render={() => <div>The page was not found.</div>} />
  </Switch>
);

export default routes;
