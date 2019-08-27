import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

const Property = (props) => {
    return (
    <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Meta>{props.type} · {props.beds} · {props.kitchen}</Card.Meta>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.cost}/night · {props.totalcost}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        {/* App Rating Section */}
        <Icon name='star' />
        Rating {props.rating}
      </a>
    </Card.Content>
    </Card>
  );
}

export default Property;
