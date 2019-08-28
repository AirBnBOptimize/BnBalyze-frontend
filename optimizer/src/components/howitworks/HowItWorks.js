import React from 'react';
import './howItWorks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faHotel, faCalculator } from '@fortawesome/free-solid-svg-icons'

const HowItWorks = () => {
    return ( 
        <main>
        <section>
            <div className="marketingContent">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faCalculator} className="icon" />
                </div>
                <div className="blurb">
                    <h2>Main Reason</h2>
                    <p>“By the bye, Charles, are you really serious in meditating a dance at Netherfield? I would advise you, before you determine on it, to consult the wishes of the present party; I am much mistaken if there are not some among us to whom a ball would be rather a punishment than a pleasure.”</p>
                </div>
            </div>
            <div className="roiContent">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faDollarSign} className="icon" />      
                </div>
                <div className="blurb">
                    <h2>Optimize ROI%</h2>
                    <p>“If you mean Darcy,” cried her brother, “he may go to bed, if he chooses, before it begins--but as for the ball, it is quite a settled thing; and as soon as Nicholls has made white soup enough, I shall send round my cards.”</p>
                </div>

            </div>
            <div className="occupancyContent">
                <div className="contentIcon">
                    <FontAwesomeIcon icon={faHotel} className="icon" />
                </div>
                <div className="blurb">
                    <h2>Increase Occupancy</h2>
                    <p>“I should like balls infinitely better,” she replied, “if they were carried on in a different manner; but there is something insufferably tedious in the usual process of such a meeting. It would surely be much more rational if conversation instead of dancing were made the order of the day.”</p>    
                </div>       

            </div>
        </section>
    </main>
     );
}
 
export default HowItWorks;