import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-wifi } from '@fortawesome/free-solid-svg-icons';

const Property = (props) => {
    return (
    <Card>
    <Image src="" wrapped ui={false} className="image" />
    <Card.Content className="property-card">
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.room_type} · {props.accommodates} Beds </Card.Description>
      <Card.Description>{props.neighborhood} </Card.Description>
      <Card.Description>Bedrooms · {props.bedrooms}</Card.Description>
      <div className="amenities">
      <Card.Description>Wifi: {props.wifi}</Card.Description>
      <Card.Description>Cable TV: {props.cable_tv}</Card.Description>
      <Card.Description>Washer: {props.washer}</Card.Description>
      <Card.Description>Kitchen: {props.kitchen}</Card.Description>
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