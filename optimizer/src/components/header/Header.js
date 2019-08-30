import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    // console.log("Header",props);
    return (
        <header>
            <nav>
                <div className="leftNav"><Link to="/"><h2>BnBalyze</h2></Link></div>
                <div className="rightNav">
                    <a href="#howitworks"><h2>How it Works</h2></a>
                    <Link 
                    id="updateButton"
                    onClick={()=>{
                        const ub=document.querySelector('#updateButton h2');
                        ub.textContent="Login";
                    }} 
                    to={(props.loginLink ? props.loginLink : '/login')}><h2>{(props.loginText ? props.loginText : 'Login')}</h2></Link>
                </div>

            </nav>
        </header>
    );
}
export default Header;