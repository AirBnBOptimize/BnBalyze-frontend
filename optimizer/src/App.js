import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.sass';
import Register from './components/Register/Register';
import Login from './components/Register/Login';

function App() {
  return (
    <div className="App">
      <h1>BnBalyze</h1>
      <Switch>
      <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      
    </div>
  );
}

export default App;
