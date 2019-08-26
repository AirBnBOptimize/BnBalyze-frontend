import React from 'react';
import './App.css';
import Header from "./components/header/Header.js";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}/>
      <Route path="/login"
      render={(props) => <Header  {...props} loginLink="Register"/>}
      /> 

    </div>
  );
}


export default App;
