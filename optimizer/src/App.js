import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/login/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";
import PropertyList from "./components/PropertyList/PropertyList.js";

function App() {;

  return (
    <div className="App">

      <Switch>

      <Route path="/login"

        render={(props) => {
          return(
            <>
            <Header  {...props} loginLink="Register"/>
            <Login/>
            </>
          
            )
        }
      }
      /> 



        <Route component={Header}/>
      
      </Switch>
      <PropertyList/>
      <Route exact path="/" component={Home}/>

    </div>
  )}

export default App;
