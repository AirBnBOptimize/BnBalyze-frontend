import React, {useState} from 'react';
import './predictPropertyPrice.css';


export default function PredictPropertyPrice() {
    // to hold the state
    const [propertyPrediction, setPropertyPrediction] = useState({
        neighborhood:'',
        room_type:'',
        accommodates: '',
        bedrooms: '',
        number_of_reviews: '',
        wifi: '',
        cable_tv: '',
        washer: '',
        kitchen: ''})

    return (
        <div className='predict-property-price'>
            PredictPropertyPrice
        </div>
    )
}
