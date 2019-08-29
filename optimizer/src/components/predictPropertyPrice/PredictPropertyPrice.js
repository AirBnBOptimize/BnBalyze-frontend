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
        < >
        <form className='predict-property-price' onSubmit={predictPrice}>
            <h3> Predict Property Price </h3>

            <div className='neighborhood-room-type'>

                <div className='element-predict-form'>
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
                </div>

                <div className='element-predict-form'>
                    Room type
                    <select value={propertyPrediction.room_type} onChange={handleChange}>
                        <option value='1'> Entire home/apt </option>
                        <option value="2"> Private room </option>
                        <option value="3"> Shared room </option>
                    </select>
                </div>
            </div>

            <div className='accomodates-bedrooms-bathrooms-reviews'>
                <div className='element-predict-form'>
                # of People
                <input type='number' name='accommodates' value={propertyPrediction.accommodates} onChange={handleChange} />
                </div>

                <div className='element-predict-form'>
                # of Bedrooms 
                <input type='number' name='numberOfBedrooms' value={propertyPrediction.numberOfBedrooms} onChange={handleChange} />
                </div>

                <div className='element-predict-form'>
                # of Reviews 
                <input type='number' name='number_of_reviews' value={propertyPrediction.number_of_reviews} onChange={handleChange} />
                </div>

            </div>
            
            <div className='wifi-cable-washer-kitchen'>

                <div className='element-predict-form'> 
                    Wifi
                    <input 
                    type='checkbox'
                    name='wifi'
                    value={propertyPrediction.wifi}
                    onChange={handleChange}
                    />
                </div>

                <div className='element-predict-form'> 
                    Cable/Tv
                    <input 
                    type='checkbox'
                    name='cableTv'
                    value={propertyPrediction.cable_tv}
                    onChange={handleChange}
                    />
                </div>

                <div className='element-predict-form'> 
                    Washer
                    <input 
                    type='checkbox'
                    name='washer'
                    value={propertyPrediction.washer}
                    onChange={handleChange}
                    />
                </div>

                <div className='element-predict-form'> 
                    Kitchen
                    <input 
                    type='checkbox'
                    name='kitchen'
                    value={propertyPrediction.kitchen}
                    onChange={handleChange}
                    />
                </div>

            </div>

 



            <button>
                Predict
            </button>
       </form>
       </>
    )
}
