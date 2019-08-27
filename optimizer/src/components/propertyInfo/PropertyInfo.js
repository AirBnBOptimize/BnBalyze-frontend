import React, {useState} from 'react';
import './propertyInfo.scss';
import axios from 'axios';

const PropertyInfo = (props) => {
    const data={id:'42',address:'1313 Mockingbird ln.',city:'Miami',state:'WA',zip:'90210',beds:'3',bedrooms:'2',kitchen:'full'}

    console.log("PI Props",props);
    const [property,setProperty]=useState(data);
    // axios
    // .get('***{props.match.params.id}')
    // .then(res => {
    // })
    // .catch(error => {
    //     console.error('Server Error', error);
    // });
    // setProperty(data);
    
    return ( 
        <div className="propertyInfo">
            <div className="propertyBox">
                <div className="propertyImage">
                    <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="House"/>
                </div>
                <div className="infoLayout">
                    <div>Address:</div>
                    <div>{property.address}<br/>{property.city}, {property.state} {property.zip}</div>
                    <div>Beds:</div>
                    <div>{property.beds}</div>
                    <div>Bedrooms:</div>
                    <div>{property.bedrooms}</div>
                    <div>Kitchen:</div>
                    <div>{property.kitchen}</div>
                </div>


            </div>
 

        </div>
     );
}
 
export default PropertyInfo;