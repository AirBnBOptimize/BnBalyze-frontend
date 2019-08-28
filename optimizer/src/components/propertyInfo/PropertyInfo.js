import React, {useEffect,useState} from 'react';
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
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkFudGhvbnkxIiwiaWF0IjoxNTY3MDA5NTcwLCJleHAiOjE1NjcwOTU5NzB9.gSKEmTp3MVWILSbhEh99TSWa9aSgmGksiFRKcKAS-dg";


    const [property,setProperty]=useState();

    useEffect(()=>{
        console.log("PI Props", props,props.match.params.id);
        // axiosWithAuth
        // localStorage.getItem(‘token’)
        axios
        .get('https://bnbalyze.herokuapp.com/properties',{headers: {Authorization:token}})
        .then(res => {
            console.log("DATA",res.data[props.match.params.id]);
            setProperty(res.data[props.match.params.id]);
        })
        .catch(err => {
            console.error('Server Error', err);
            console.log(err);
        });
    },[props]);

    if (!property){return "Loading"};

    return ( 
        <div className="propertyInfo">
            <div className="propertyBox">
                <div className="propertyImage">
                    <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="House"/>
                </div>
                <div className="infoLayout">
                    <div>Neighborhood:</div>
                    <div>{property.neighborhood}</div>
                    
                    <div>Room Type:</div>
                    <div>{property.room_type}</div>
                    
                    <div>Accomodates:</div>
                    <div>{property.accommodates}</div>

                    <div>Bedrooms:</div>
                    <div>{property.bedrooms}</div>
                    
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