import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav>
                <div className="leftNav"><Link to="/"><h2>BnBalyze</h2></Link></div>
                <div className="rightNav">
                    <Link to="/howitworks"><h2>How it Works</h2></Link>
                    {/* <Link to="/new-user"><h2>Register</h2></Link> */}
                    <Link to={(props.loginLink ? `/${props.loginLink}` : '/login')}><h2>{(props.loginText ? props.loginText : 'Login')}</h2></Link>
                </div>

            </nav>
        </header>
    );
}
export default Header;