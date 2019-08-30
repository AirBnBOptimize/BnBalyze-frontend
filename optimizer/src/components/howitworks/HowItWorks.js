import React from 'react';
import './howItWorks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faHotel, faCalculator } from '@fortawesome/free-solid-svg-icons'

const HowItWorks = () => {
    return ( 
        <main>
        <section>
            <div className="marketingContent" id="howitworks">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faCalculator} className="icon" />
                </div>
                <div className="blurb">
                    <h2>Deep Data Integration</h2>
                    <p>We use Machine learning and up to date Data Science techniques to clean AirBnb's database of over 17,000 records to bring your the most accurate data possible.</p>
                </div>
            </div>
            <div className="roiContent">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faDollarSign} className="icon" />      
                </div>
                <div className="blurb">
                    <h2>Optimize ROI%</h2>
                    <p>Getting the most value from your property is an important task. Our prediction model will help you get top dollar for your rental no matter the neighborhood or time of year</p>
                </div>

            </div>
            <div className="occupancyContent">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faHotel} className="icon" />
                </div>
                <div className="blurb">
                    <h2>Increase Occupancy</h2>
                    <p>Having a competitive price for your area can be the difference between getting that booking or your listing sitting empty. Help your potential customers see the value in your property with BnBalyze</p>    
                </div>       

            </div>
        </section>
    </main>
     );
}
 
export default HowItWorks;