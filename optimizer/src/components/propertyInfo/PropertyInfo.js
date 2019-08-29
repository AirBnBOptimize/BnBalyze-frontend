import React, {useEffect,useState} from 'react';
import './propertyInfo.scss';
import axios from 'axios';

const PropertyInfo = (props) => {
    //Static Data
    // const data={'neighborhood': 2
    // , 'room_type': 2
    // , 'accommodates':8
    // , 'bedrooms': 3
    // , 'number_of_reviews':30
    // , 'wifi':1
    // , 'cable_tv':0
    // , 'washer':0
    // , 'kitchen':1};
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkFudGhvbnkxIiwiaWF0IjoxNTY3MDA5NTcwLCJleHAiOjE1NjcwOTU5NzB9.gSKEmTp3MVWILSbhEh99TSWa9aSgmGksiFRKcKAS-dg";
    // localStorage.setItem('token',token);

    const [property,setProperty]=useState();

    useEffect(()=>{
        console.log("PI Props", props,props.match.params.id,localStorage.getItem('token'));
        // axiosWithAuth
        
        axios
        .get('https://bnbalyze.herokuapp.com/properties',{headers: {Authorization:localStorage.getItem('token')}})
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