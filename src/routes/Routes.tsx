import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../page/Login/Login';
import Cadastro from '../page/Cadastro/Cadastro';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/cadastar" exact component={Cadastro} />
    </Switch>
  );
}
