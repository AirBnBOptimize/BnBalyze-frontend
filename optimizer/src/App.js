import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/Register/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";

function App() {
  return (
    <div className="App">
      <h1>BnBalyze</h1>
      <Switch>
      <Route path="/login"
        render={(props) => {
          return(<Header  {...props} loginLink="Register"/>)
        }}
        /> 
        <Route component={Header}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      
    </div>
  )}

export default App;
