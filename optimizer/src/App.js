import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/home/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";
import HowItWorks from "./components/howitworks/HowItWorks.js";
import PropertyList from "./components/propertyInfo/PropertyList.js";
import WelcomePage from './components/home/WelcomePage.js';
import AddPropertyForm from './components/addPropertyForm/AddPropertyForm.js';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          render={(props) => {
            // console.log("Button",props);
            if(localStorage.getItem('token')){
              return(<Header  {...props} loginLink="/logout" loginText="Logout"/>)
            } else if(props.location.pathname==="/login"){
              return(<Header  {...props} loginLink="/register" loginText="Register" />)
            } else {
              return(<Header  {...props} />)
            }
          }}
          /> 
          <Route component={Header}/>
      </Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Home} />
        <Route exact path='/register' component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={HowItWorks} />
        <Route path="/welcome" component={WelcomePage} />
        <Route exact path="/propertyInfo/:id" component={PropertyInfo} />
        <Route exact path="/properties" component={PropertyList} />
        <Route exact path="/addproperty" component={AddPropertyForm} />
        <Route exact path="/addproperty/:id" component={AddPropertyForm} />

    </div>
  )
}

export default App;
