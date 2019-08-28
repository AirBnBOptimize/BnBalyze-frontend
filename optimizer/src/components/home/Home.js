import React from 'react';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHotel } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const  Home= (props) => {
    console.log(props);
    if(props.match.path==="/logout"){
        localStorage.setItem('token','')
        console.log("NoToken",localStorage.getItem('token'));
    };
    
    return ( 
        <main>
            <section className="topContent">
                <div>
                    <h1>Analyze your BnB Listings<br/>with pinpoint geographic analytics</h1>
                </div>
                <div className="startButton">
                    Start Today
                </div>
            </section>
            <section className="bottomContent">
                <div className="roi">
                    <Link to="/howitworks">Optimize ROI%<br/>
                    <FontAwesomeIcon icon={faDollarSign} className="icon" /></Link>
                </div>
                <div className="occpuancy">
                    <Link to="/howitworks">Increase Occupancy<br/>
                    <FontAwesomeIcon icon={faHotel} className="icon" /></Link>
                </div>
            </section>
                        {/* Bogus link to show to a property */}
                        <a href="/propertyInfo/1">Test Link: Go to Property</a>
        </main>

     );
}
 
export default Home;