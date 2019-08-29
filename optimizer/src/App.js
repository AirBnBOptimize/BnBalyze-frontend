import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/login/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";
import HowItWorks from "./components/howitworks/HowItWorks.js";
import PredictPropertyPrice from './components/predictPropertyPrice/PredictPropertyPrice';
import PropertyList from "./components/propertyList/PropertyList.js";
import WelcomePage from './components/welcomePage/WelcomePage.js';

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
              return(<Header  {...props} loginLink="/new-user" loginText="Register" />)
            } else {
              return(<Header  {...props} />)
            }
          }}
          /> 
          <Route component={Header}/>
      </Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Home} />
        <Route exact path='/new-user' component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/welcome" component={WelcomePage} />
        <Route exact path="/propertyInfo/:id" component={PropertyInfo} />
        <Route exact path="/properties/" component={PropertyList} />


      {/* temp for testing */}
      <PredictPropertyPrice/>

    </div>
  )
}

export default App;
