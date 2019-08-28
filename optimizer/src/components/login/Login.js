import React, {useState} from 'react';
import axios from 'axios';
import './login.css';


export default function Login () {

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
        .post("https://airbnboptimalprice-backend.herokuapp.com/auth/login", credentials)

        // to save the token if the request is successfull 
        .then(response => {
            console.log('getting the following response: ', response);
            localStorage.setItem('token', response.data.token);

            // redirect to welcome page

        })
        // to log the error if request fails
        .catch(error => {
            console.log('unable to login: ', error);
        })
    }

    return (
        <form className='login-form' onSubmit={login}>
            
            <h3> Please login </h3>

            <div className='username-password'>

            Username 
            <input type='text' name='username' value={credentials.username} onChange={handleChange} />

            Password 
            <input type='password' name='password' value={credentials.password} onChange={handleChange} />

            </div>


            {/* link to signup */}
            <button> <h3> No Account? Sign Up </h3> </button>
            
            
        </form>
    )
}
