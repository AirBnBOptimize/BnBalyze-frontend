import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.sass';
import Register from './components/Register/Register';
import PropertyList from './components/Property/PropertyList';

function App() {
  return (
    <div className="App">
      <h1>BnBalyze</h1>
      <PropertyList></PropertyList>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/properties" component={PropertyList} />
      </Switch>
    </div>
  );
}

export default App;
