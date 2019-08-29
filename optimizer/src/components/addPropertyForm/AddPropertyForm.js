import React, {useState} from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function AddPropertyForm() {

    // to hold the state
    const [propertyValues, setPropertyValues] = useState ({address: '', city: '', state: '', zipcode: '', bedrooms: '', beds: '', kitchen: ''});

    // to hold US states


    // to update the state as values change
    const handleChange = event => {
        console.log('handling change: ', event.target.name, event.target.value);
        setPropertyValues({...propertyValues, [event.target.name]: event.target.value});
    }

    const addproperty = event => {
        console.log('adding property');
        // will make a post request, need to double check the names etc
    }

    return (
        <form className='add-property-form'>
            <h3> Add a Property </h3>

            {/* <div className='address-and-city'>  */}

            Street Address
            <input type='address' name='address' value={propertyValues.address} onChange={handleChange} />

            City
            <input type='text' name='city' value={propertyValues.city} onChange={handleChange} />
            
            {/* </div> */}


            {/* <div className='state-and-zipcode'>  */}
             {/* State
            <input type='text' name='state' value={propertyValues.state} onChange={handleChange} /> */}

            <fieldset className='us-states'>
                State
                <select>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
            </fieldset>

            
            {/* <div className='zipcode'>   */}
            Zip Code
            <input type='number' name='zipcode' value={propertyValues.zipcode} onChange={handleChange} />

            {/* </div> */}
            
            {/* // </div>  */}

            {/* <div className='beds-bedrooms-kitchen'> 
            <div className='beds'>  */}
            # of Beds
            <input type='number' name='beds' value={propertyValues.beds} onChange={handleChange} />
            {/* </div>
      
            <div className='bedrooms'>  */}
            # of Bedrooms
            <input type='number' name='bedrooms' value={propertyValues.bedrooms} onChange={handleChange} />
            {/* </div>

            <div className='kitchen'>  */}
            Kitchen
            <input type='boolean' name='kitchen' value={propertyValues.kitchen} onChange={handleChange} />
            {/* </div>
            
            </div> */}

            <button> Add </button>
        </form>
    )
}