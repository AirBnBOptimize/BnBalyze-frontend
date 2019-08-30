import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Register.scss';

export default function Register() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = evt => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    };

    const register = async evt => {
        evt.preventDefault();
        try {
            let headers = {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            };

            let res = await axios.post('https://bnbalyze.herokuapp.com/auth/register', credentials, headers);
            localStorage.setItem('token', res.data.payload);
            console.log(res);
        } catch (err) {
            console.error(err.message);
        }

    }
    return (
        <div className="register-form">
            Please Register
            <form className="ui form" onSubmit={register}>
                <div className="field">
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={evt => handleChange(evt)}
                        placeholder="Username" />
                </div>
                <div className="field">
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={evt => handleChange(evt)}
                        placeholder="Password" />
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
                <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </form>
        </div>
    )
}
