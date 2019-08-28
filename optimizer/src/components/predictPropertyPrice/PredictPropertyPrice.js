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

    // to update the state when changing values
    const handleChange = event => {
        console.log('changing');

    }

    // to predict the price when form is submitted
    const predictPrice = event => {
        console.log('predicting price');

    }

    return (
        <div className='predict-property-price'>
             <form onSubmit={predictPrice}>
            <h3> Predict Property Price </h3>
            <label>
                Neighborhood
                <select value={propertyPrediction.neigborhood} onChange={handleChange}>
                    <option value="neigborhood1"> Neighborhood 1 </option>
                    <option value="neigborhood2"> Neighborhood 2 </option>
                    <option value="neigborhood3"> Neighborhood 3 </option>
                    <option value="neigborhood4"> Neighborhood 4 </option>
                </select>
            </label>
           
            Zipcode
            <input type='number' name='zipcode' value={propertyPrediction.zipcode} onChange={handleChange} />
          
            Room type
            
            Private
            Shared
            Entire Home/Apartment

            Number of People 
            <input type='number' name='numberOfPeople' value={propertyPrediction.numberOfPeople} onChange={handleChange} />

            Number of Bedrooms 
            <input type='number' name='numberOfBedrooms' value={propertyPrediction.numberOfBedrooms} onChange={handleChange} />

            Number of Reviews 
            <input type='number' name='nnumberOfReviews' value={propertyPrediction.numberOfReviews} onChange={handleChange} />

            Wifi
            <input 
            type='checkbox'
            name='wifi'
            value={propertyPrediction.wifi}
            onChange={handleChange}
            />
           
           Cable/Tv
            <input 
            type='checkbox'
            name='cableTv'
            value={propertyPrediction.cableTv}
            onChange={handleChange}
            />

            Washer
            <input 
            type='checkbox'
            name='washer'
            value={propertyPrediction.washer}
            onChange={handleChange}
            />

            Kitchen
            <input 
            type='checkbox'
            name='kitchen'
            value={propertyPrediction.kitchen}
            onChange={handleChange}
            />

            <button>
                Predict
            </button>
       </form>
       </div>
    )
}
