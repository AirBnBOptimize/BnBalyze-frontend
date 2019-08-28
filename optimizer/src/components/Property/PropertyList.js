import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "./Property";
import { Container } from 'semantic-ui-react'

export default function PropertyList() {
  const [property, setProperty] = useState([]);
 
  useEffect(() => {
       axios
        .get(`https://bnbalyze.herokuapp.com/properties`, {headers: {Authorization: localStorage.getItem('token')}})
        .then(response => {
         //Need to validate API calling data properly
          setProperty(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  return (
    <section className="property-list grid-view">
      <Container className="container">
          {/* Need to ensure props is mapping acrossing properly */}
          {property.map(id => (   
            <div className="cardStyle">
            <Property
              key={id}
              image={id.image}
              neighborhood={id.neighborhood}
              room_type={id.room_type}
              accommodates={id.accommodates}
              bedrooms={id.bedrooms}
              reviews={id.reviews}
              wifi={id.wifi}
              cable_tv={id.cable_tv}
              washer={id.washer}
              kitchen={id.kitchen}
            />
            </div>
            ))}
      </Container>
    </section>
  );
}