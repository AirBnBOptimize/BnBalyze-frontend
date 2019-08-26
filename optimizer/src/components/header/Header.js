import React from 'react';
import './header.scss';

const  Header= () => {
    return (
        <header>
            <h1>BnBalyze</h1>
            <nav>
                <div className="leftNav">Left Nav</div>
                <div className="rightNav">Right Nav</div>
            </nav>
        </header>
      );
}
 
export default Header;