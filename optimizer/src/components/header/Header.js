import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const  Header= (props) => {
    console.log(props);
=======
const Header = (props) => {
    // console.log("Header",props);
>>>>>>> 67b71cb44d5e11d2aa0ac806f2fe3bb3d730c8cb
    return (
        <header>
            <nav>
                <div className="leftNav"><Link to="/"><h2>BnBalyze</h2></Link></div>
                <div className="rightNav">
<<<<<<< HEAD
                    <Link to="/howitworks"> <h2>How it Works</h2> </Link>
                    <Link to={(props.loginLink?`/${props.loginLink}`:'Login')}><h2>{(props.loginLink?props.loginLink:'Login')}</h2></Link>
=======
                    <Link to="/howitworks"><h2>How it Works</h2></Link>
                    <Link to={(props.loginLink ? props.loginLink : '/login')}><h2>{(props.loginText ? props.loginText : 'Login')}</h2></Link>
>>>>>>> 67b71cb44d5e11d2aa0ac806f2fe3bb3d730c8cb
                </div>

            </nav>
        </header>
    );
}
export default Header;