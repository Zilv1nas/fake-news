import React from 'react';
import { Switch, Route } from 'react-router';
import { PostList, Post } from './components/posts';

const routes = (
  <Switch>
    <Route path="/" exact component={PostList} />
    <Route path="/posts/:id" exact component={Post} />
    <Route render={() => <div>The page was not found.</div>} />
  </Switch>
);

export default routes;
