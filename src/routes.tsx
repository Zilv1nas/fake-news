import React from 'react';
import { Route, Switch } from 'react-router';
import { Post, PostList } from './components/posts';

const PageNotFound = () => (
  <div>The page was not found.</div>
);

const routes = (
  <Switch>
    <Route path="/" exact={true} component={PostList} />
    <Route path="/posts/:id" exact={true} component={Post} />
    <Route component={PageNotFound} />
  </Switch>
);

export default routes;
