import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = evt => {
        console.log(evt.target.value);
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    };

    const register = async evt => {
        evt.preventDefault();
        try {
            console.log(credentials);
            let { data } = await axios.post('https://airbnboptimalprice-backend.herokuapp.com/auth/register', credentials);
            console.log(data);
            localStorage.setItem('authToken', data.payload);
        } catch (err) {
            console.error(err.message);
        }

    }
    return (
        <div>
            Please Register
            <form onSubmit={register}>
                Username:
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={evt => handleChange(evt)} />
                Password:
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={evt => handleChange(evt)} />
                <button>Sign Up</button>
                <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
            </form>
        </div>
    )
}
