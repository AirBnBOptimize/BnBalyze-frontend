import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import PropertyList from './components/Property/PropertyList';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/login"
        render={(props) => {
          return(<Header  {...props} loginLink="Register"/>)
        }}
        /> 
        <Route component={Header}/>
      
      </Switch>
      <Route exact path="/" component={Home}/>
    </div>
  )}

export default App;
