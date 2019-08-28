import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header.js";
import './App.sass';
import Register from './components/Register/Register';
import Login from './components/login/Login';
import Home from "./components/home/Home.js";
import PropertyInfo from "./components/propertyInfo/PropertyInfo.js";
<<<<<<< HEAD
import PropertyList from "./components/PropertyList/PropertyList.js";

function App() {;

=======
import HowItWorks from "./components/howitworks/HowItWorks.js";
import PredictPropertyPrice from './components/predictPropertyPrice/PredictPropertyPrice';
function App() {
>>>>>>> 67b71cb44d5e11d2aa0ac806f2fe3bb3d730c8cb
  return (
    <div className="App">

      <Switch>
<<<<<<< HEAD

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
=======
        <Route
          render={(props) => {
            // console.log("Button",props);
            if(localStorage.getItem('token')){
              return(<Header  {...props} loginLink="/logout" loginText="Logout" />)
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
        <Route exact path="/propertyInfo/:id" component={PropertyInfo} />


      {/* temp for testing */}
      <PredictPropertyPrice/>
>>>>>>> 67b71cb44d5e11d2aa0ac806f2fe3bb3d730c8cb

    </div>
  )
}

export default App;
