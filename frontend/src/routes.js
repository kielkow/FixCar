import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Client from './pages/Client';
import Car from './pages/Car';
import Service from './pages/Service';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/client" component={Client} />
        <Route path="/car" component={Car} />
        <Route path="/service" component={Service} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
