import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import RocketMan from '../../img/RocketMan.png'
import PropertyList from '../propertyInfo/PropertyList';


export default function Login (props) {

    // to hold the state
    const [credentials, setCredentials] = useState({username: '', password: ''});

    // to update the state as values change
    const handleChange = event => {
        console.log('handling change: ', event.target.name, event.target.value);
        setCredentials({...credentials, [event.target.name]: event.target.value});
    }

    // to make post request and get the token
    const login = event => {
        console.log('logging in');
        event.preventDefault();
        console.log('posting the following: ', credentials);

        // to get the token from the server
        axios
            // .post("https://airbnboptimalprice-backend.herokuapp.com/auth/login", credentials)
            .post("https://bnbalyze.herokuapp.com/auth/login", credentials)

        // to save the token if the request is successfull 
        .then(response => {
            console.log('getting the following response: ', response);
            localStorage.setItem('token', response.data.token);
            // redirect to welcome page
            if (localStorage.getItem('token')){
                // console.log(props);
                props.history.push("/welcome")
            };
        })
        // to log the error if request fails
        .catch(error => {
            console.log('unable to login: ', error);
        })
    }

    return (
        <div className="absolute">
            <img width="609px" height="570px" className="z-index" src={RocketMan}></img>
        <form className='login-form' onSubmit={login}>
            
            <h3> Please login </h3>

            <div className='element-login-form'>
                Username
                <input type='text' name='username' value={credentials.username} onChange={handleChange} />
            </div>

            <div className='element-login-form'>
                Password
                <input type='password' name='password' value={credentials.password} onChange={handleChange} />
            </div>

            <button> Login </button>
           
          <div className='redirect'>
            No Account? 
            <Link to='/new-user'> Sign up </Link> 
            </div>

            {/* link to signup */}
            {/* <button> <h3> No Account? Sign Up </h3> </button> */}
            
            
        </form>
        </div>
    )
}
