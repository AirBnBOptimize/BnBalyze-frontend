import React from 'react';
import './header.scss';

const  Header= () => {
    return (
        <header>
            <nav>
                <div className="leftNav"><h2>BnBalyze</h2></div>
                <div className="rightNav">
                        <h2>How it Works</h2>
                        <h2>Login</h2>
                </div>

            </nav>
        </header>
      );
}
export default Header;