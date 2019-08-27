import React, {useState} from 'react';
import './propertyInfo.scss';
import axios from 'axios';

const PropertyInfo = (props) => {
    const data={'neighborhood': 2
    , 'room_type': 2
    , 'accommodates':8
    , 'bedrooms': 3
    , 'bathrooms': 4
    , 'number_of_reviews':30
    , 'wifi':1
    , 'cable_tv':0
    , 'washer':0
    , 'kitchen':1};

const neighborhood=(hood)=>{
    switch(hood){
        case 1:return 'Friedrichshain-Kreuzberg';
        case 2:return 'Mitte';
        case 3:return 'Pankow';
        case 4:return 'Neukölln';
        case 5:return 'Charlottenburg-Wilm.';
        case 6:return 'Tempelhof - Schöneberg';
        case 7:return 'Lichtenberg';
        case 8:return 'Treptow - Köpenick';
        case 9:return 'Steglitz - Zehlendorf';
        case 10:return 'Reinickendorf';
        case 11:return 'Marzahn - Hellersdorf';
        case 12:return 'Spandau';
    }
}

const roomType=(room)=>{
    switch(room){
        case 1:return 'Entire home/apt';
        case 2:return 'Private room';
        case 3:return 'Shared room';
    }
}

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
                    <div>Neighborhood:</div>
                    <div>{neighborhood(property.neighborhood)}</div>
                    
                    <div>Room Type:</div>
                    <div>{roomType(property.room_type)}</div>
                    
                    <div>Accomodates:</div>
                    <div>{property.accommodates}</div>

                    <div>Bedrooms:</div>
                    <div>{property.bedrooms}</div>
                    
                    <div>Bathrooms:</div>
                    <div>{property.bathrooms}</div>
                    
                    <div># of Reviews:</div>
                    <div>{property.number_of_reviews}</div>
                </div>
                <div className="checks">
                    <div>Wifi:<br/>{property.wifi?'Yes':'No'}</div>
                    <div>Cable TV:<br/>{property.cable_tv?'Yes':'No'}</div>
                    <div>Washer:<br/>{property.washer?'Yes':'No'}</div>
                    <div>Kitchen:<br/>{property.kitchen?'Yes':'No'}</div>
                </div>

            </div>
 

        </div>
     );
}
 
export default PropertyInfo;