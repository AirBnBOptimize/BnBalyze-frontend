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
                    <option value='1'> Friedrichshain-Kreuzberg</option>
                    <option value="2"> Mitte </option>
                    <option value="3"> Pankow </option>
                    <option value="4"> Neukölln </option>
                    <option value="5"> Charlottenburg-Wilm </option>
                    <option value="6"> Tempelhof - Schöneberg </option>
                    <option value="7"> Lichtenberg </option>
                    <option value="8"> Treptow - Köpenick </option>
                    <option value="9"> Steglitz - Zehlendorf </option>
                    <option value="10"> Reinickendorf </option>
                    <option value="11"> Marzahn - Hellersdorf </option>
                    <option value="12"> Spandau </option>
                   
                </select>
            </label>

            {/* room_type = {'Entire home/apt': 1, 'Private room': 2, 'Shared room': 3} */}
 
            Room type
            
            Private
            Shared
            Entire Home/Apartment

            Accommodates
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
