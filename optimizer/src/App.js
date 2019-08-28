import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";
import HowItWorks from "./components/howitworks/HowItWorks.js";

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
      <Route path="/howitworks"  component={HowItWorks} />
      <Route exact path="/propertyInfo/:id" component={PropertyInfo}/>
    </div>
  )}

export default App;
