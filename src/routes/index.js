import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

export const HomePage = () => <h1>Hello world</h1>;

const AsyncLibrary = Loadable({
  loader: () => import('../views/Library'),
  loading: () => null,
});

export default () => (
  <Switch>
    <Route path='/' exact component={AsyncLibrary} />
    <Route path='/home' exact component={HomePage} />
  </Switch>
);
