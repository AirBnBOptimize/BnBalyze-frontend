import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Container } from 'semantic-ui-react'

export default function PropertyList() {
  const [property, setProperty] = useState([]);
 
  useEffect(() => {
       axios
    // Need to add the API link
        .get(``)
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
              type={id.type}
              beds={id.beds}
              kitchen={id.kitchen}
              name={id.name}
              cost={id.cost}
              totalcost={id.totalcost}
              rating={id.rating}
            />
            </div>
            ))}
      </Container>
    </section>
  );
}