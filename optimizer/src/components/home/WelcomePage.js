import React from 'react';
import './welcomePage.scss';
import PropertyList from '../propertyInfo/PropertyList.js';

const  WelcomePage= (props) => {
    return (
        <div className="welcome">
            <div className="addProp" onClick={(e)=>props.history.push("/addproperty")}>Add Property</div>
            <PropertyList/>
        </div>

    );
}

export default WelcomePage;