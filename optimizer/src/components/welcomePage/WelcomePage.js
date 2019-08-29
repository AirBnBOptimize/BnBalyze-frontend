import React from 'react';
import './welcomePage.scss';
import PropertyList from '../propertyList/PropertyList.js';

const  WelcomePage= () => {
    return (
        <div className="welcome">
            <div className="addProp">Add Property</div>
            <PropertyList/>
        </div>

    );
}

export default WelcomePage;