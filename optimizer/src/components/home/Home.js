import React from 'react';
import './home.scss';
import PredictPropertyPrice from '../predictPropertyPrice/PredictPropertyPrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHotel } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const  Home= (props) => {
    // console.log("Home Props",props,localStorage.getItem('token'));
    if(props.match.path==="/logout"){
        localStorage.setItem('token','')
        // console.log("NoToken",localStorage.getItem('token'));
    };
    
    return ( 
        <main>
            <section className="topContent">
                <div>
                    <h1>Analyze your BnB Listings<br/>with pinpoint geographic analytics</h1>
                </div>
                <div className="startButton">
                <Link to="/new-user">Start Today</Link>
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
                        {/* Bogus links to show to a property */}
                        <a href="/propertyInfo/1">Test Link: Go to Property</a><br/>
                        <a href="/welcome">Show user welcome page</a>
                        {/*   temp for testing */}
                        
        </main>
  

     );
}
 
export default Home;