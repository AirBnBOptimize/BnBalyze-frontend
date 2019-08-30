import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faTv, faUtensils, faTshirt } from '@fortawesome/free-solid-svg-icons';



const Property = (props) => {
    return (
    <Card className="image" >
    <Image  wrapped ui={false}/>
    <Card.Content className="property-card">
      
     
      
      <Card.Description className="room_type">{props.room_type} · Sleeps {props.accommodates} </Card.Description>
      <Card.Description className="neighborhood">{props.neighborhood} </Card.Description>
      <Card.Description className="title" >{props.title} </Card.Description>
      <Card.Description className="bedrooms">Bedrooms · {props.bedrooms}</Card.Description>

     

      <div className="pricecompare">
        <div className="pricebox-container">
          <h6>Current Price</h6>
          <div className="pricebox"><p className="price">${props.current_price} / night</p></div>
        </div>
        <div className="pricebox-container">
          <h6>Recommended</h6>
          <div className="pricebox"><p className="price">${props.recommendation_price} / night</p></div>
        </div>
      </div>
      <div className="amenities">
      <Card.Description><FontAwesomeIcon icon={faWifi} className="icon-wifi" /></Card.Description>
      <Card.Description><FontAwesomeIcon icon={faTv} className="icon-tv" /> </Card.Description>
      <Card.Description><FontAwesomeIcon icon={faTshirt} className="icon-dryer" /> </Card.Description>
      <Card.Description><FontAwesomeIcon icon={faUtensils} className="icon-kitchen" /> </Card.Description>
      </div>

    </Card.Content>
    <Card.Content className="flex" extra>
      <a>
        {/* App Rating Section */}
            <Icon name='star' />
        Reviews: {props.reviews}
      </a>  
      <a href={props.url} target="_blank_">
            <Icon name='Linkify' />
        AirBnB Link
      </a>  
    </Card.Content>
    {/* <div className="pricecompare">
        <div className="pricebox-container">
          <div className="buttonBox">Edit</div>
        </div>
        <div className="pricebox-container">
          <div className="buttonBox">Delete</div>
        </div>
      </div> */}
    </Card>
  );
}

export default Property;