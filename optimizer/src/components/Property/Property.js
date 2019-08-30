import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

const Property = (props) => {
    return (
    <Card>
    <Image src={props.photo_url} wrapped ui={false} />
    <Card.Content className="property-card">
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.title}</Card.Description>
      <Card.Description>{props.neighborhood}</Card.Description>
      <Card.Description>{props.room_type}</Card.Description>
      <Card.Description>{props.accommodates}</Card.Description>
      <Card.Description>{props.bedrooms}</Card.Description>
      <Card.Description>{props.wifi}</Card.Description>
      <Card.Description>{props.cable_tv}</Card.Description>
      <Card.Description>{props.washer}</Card.Description>
      <Card.Description>{props.kitchen}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        {/* App Rating Section */}
        <Icon name='star' />
        Rating {props.number_of_reviews}
      </a>
      <a>
        href={props.url}
        {/* App Rating Section */}
        <Icon name='linkify' />
      </a>

    </Card.Content>
    </Card>
  );
}

export default Property;
