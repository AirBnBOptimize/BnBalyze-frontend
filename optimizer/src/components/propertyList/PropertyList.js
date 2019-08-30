import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "./Property";
import "./PropertyList.scss";
import { Container } from 'semantic-ui-react'

export default function PropertyList() {
  const [property, setProperty] = useState([]);
 
  useEffect(() => {
       axios
        .get(`https://bnbalyze.herokuapp.com/properties`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(response => {
          setProperty(response.data);
          console.log("Properties",response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  return (
    <section className="property-list-grid-view">
      <Container className="container">
          {property.map(id => (   
            <div className="cardStyle">
            <Property
              key={id}
              image={id.image}
              neighborhood={id.neighborhood}
              room_type={id.room_type}
              accommodates={id.accommodates}
              bedrooms={id.bedrooms}
              reviews={id.number_of_reviews}
              wifi={id.wifi}
              cable_tv={id.cable_tv}
              washer={id.washer}
              kitchen={id.kitchen}
              recommendation_price={id.recommendation_price}
            />
            </div>
            ))}
      </Container>
    </section>
  );
}