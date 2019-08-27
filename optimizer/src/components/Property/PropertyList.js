import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Container } from 'semantic-ui-react'

export default function PropertyList() {
  const [property, setProperty] = useState([]);
 
  useEffect(() => {
       axios
    // Need to add the API link
        .get(`./data.js`)
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
            <PropertyCard
              key={id}
              image={id.image}
              neighborhood={id.neighborhood}
              room_type={id.room_type}
              accommodates={id.accommodates}
              bedrooms={id.bedrooms}
              bathroom={id.bathroom}
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