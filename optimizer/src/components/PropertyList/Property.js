import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faTv, faUtensils, faTshirt } from '@fortawesome/free-solid-svg-icons';

const Property = (props) => {
    return (
    <Card className="image">
    <Image src="" wrapped ui={false}/>
    <Card.Content className="property-card">
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.room_type} · {props.accommodates} Beds </Card.Description>
      <Card.Description>{props.neighborhood} </Card.Description>
      <Card.Description>Bedrooms · {props.bedrooms}</Card.Description>
      <div className="amenities">
      <Card.Description><FontAwesomeIcon icon={faWifi} className="icon-wifi" /> {props.wifi}</Card.Description>
      <Card.Description><FontAwesomeIcon icon={faTv} className="icon-tv" /> {props.cable_tv}</Card.Description>
      <Card.Description><FontAwesomeIcon icon={faTshirt} className="icon-dryer" /> {props.washer}</Card.Description>
      <Card.Description><FontAwesomeIcon icon={faUtensils} className="icon-kitchen" /> {props.kitchen}</Card.Description>
      </div>
      <div className="pricecompare">
        <div className="pricebox"><p className="title">Current</p></div>
        <div className="pricebox"><p className="title">Recommendation</p></div>
      </div>
    </Card.Content>
    <Card.Content className="property-card" extra>
      <a>
        {/* App Rating Section */}
            <Icon name='star' />
        Reviews: {props.number_of_reviews}
      </a>  
    </Card.Content>
    </Card>
  );
}

export default Property;