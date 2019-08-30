import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../components/home/login.css';
import RocketMan from '../../img/RocketMan.png'

export default function Register(props) {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = evt => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    };

    const register = async evt => {
        console.log(credentials)
        evt.preventDefault();
        try {
            let headers = {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            };

            let res = await axios.post('https://bnbalyze.herokuapp.com/auth/register', credentials, headers);
            localStorage.setItem('token', res.data.payload);
            if (localStorage.getItem('token')){
                // console.log(props);
                props.history.push("/login")
            };
            console.log(res);
        } catch (err) {
            console.error(err.message);
        }

    }
    return (
        <div className="absolute">
        <img width="609px" height="570px" className="z-index" src={RocketMan}></img>
    <form className='login-form' onSubmit={register}>
        
        <h3> Please Register </h3>

        <div className='element-login-form'>
            Username
            <input type='text' name='username' value={credentials.username} onChange={handleChange} />
        </div>

        <div className='element-login-form'>
            Password
            <input type='password' name='password' value={credentials.password} onChange={handleChange} />
        </div>

        <button className="login-button"> Register </button>
       
      <div className='redirect'>
        <p>Have an Account?</p> 
        <Link className="linking" to='/login'> Sign in </Link> 
        </div>

        {/* link to signup */}
        {/* <button> <h3> No Account? Sign Up </h3> </button> */}
        
        
    </form>
        </div>
    )
}
