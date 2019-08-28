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
    const lookup={'Friedrichshain-Kreuzberg': 1,
    'Mitte': 2,
    'Pankow': 3,
    'Neukölln': 4,
    'Charlottenburg-Wilm.': 5,
    'Tempelhof - Schöneberg': 6,
    'Lichtenberg': 7,
    'Treptow - Köpenick': 8,
    'Steglitz - Zehlendorf': 9,
    'Reinickendorf': 10,
    'Marzahn - Hellersdorf':11,
    'Spandau': 12,
    1:'Friedrichshain-Kreuzberg',
    2:'Mitte',
    3:'Pankow',
    4:'Neukölln',
    5:'Charlottenburg-Wilm.',
    6:'Tempelhof - Schöneberg',
    7:'Lichtenberg',
    8:'Treptow, - Köpenick',
    9:'Steglitz, - Zehlendorf',
    10:'Reinicken,dorf',
    11:'Marzahn - Hellersdorf',
    12:'Spandau'}
    
    return lookup[hood];
}

const roomType=(room)=>{
    const lookup={
        1:'Entire home/apt',
        2:'Private room',
        3:'Shared room',
        'Entire home/apt':1,
        'Private room':2,
        'Shared room':3
    }
    return lookup[room];
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
                    
                    {/* <div>Bathrooms:</div>
                    <div>{property.bathrooms}</div> */}
                    
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