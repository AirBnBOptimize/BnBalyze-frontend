import React, {useState,useContext,useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { withFormik,Form,Field } from 'formik';
import axios from "axios";

 function addPropertyForm() {

    const hood_dict = {'Friedrichshain-Kreuzberg': 1,
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
    'Spandau': 12};

    const room_dict = {'Entire home/apt': 1, 'Private room': 2, 'Shared room': 3};

    return (
        <div>
        <h3> Add a Property </h3>
        <Form className='add-property-form'>

            <div className='neighborhood'>
                Neighborhood
                <Field component="select" name="neighborhood" key="neighborhood">
                {Object.keys(hood_dict).map((item)=>{
                    return <option value={hood_dict[item]} key={item}>{item}</option>
                })}
                </Field>
             </div>
             <div className='roomtype'> 
             RoomType
            <Field component="select" name="roomtype" key="roomtype">
                {Object.keys(room_dict).map((item)=>{
                    return <option value={room_dict[item]} key={item}>{item}</option>
                })}
            </Field>
             </div>
             <div className='accomodates' key=""> 
             Accomodates 
             <Field type="text" name="accomodates" placeholder="Accomodates" key="accomodates" />
             </div>
             <div className='bedrooms'>
             Bedrooms
             <Field type="text" name="bedrooms" placeholder="Bedrooms" key="bedrooms" />
             
             </div>
             <div className='reviews'>
             # of Reviews
             <Field type="text" name="reviews" placeholder="# of Reviews" key="reviews" />
             </div>
             <div className='wifi'>
             Wifi
             <Field type="checkbox" name="wifi" checked="" key="wifi" />
             </div>
             <div className='cabletv'>
             Cable TV
             <Field type="checkbox" name="cabletv" checked="" key="cabletv" />
             </div>
             <div className='washer'>
             Washer
             <Field type="checkbox" name="washer" checked="" key="washer" />
             </div>
             <div className='kitchen'>
             Kitchen
             <Field type="checkbox" name="kitchen" checked="" key="kitchen" />
             </div>        
             <button> Add </button> 
         </Form>
         </div>
    );
}

const AddPropertyForm = withFormik({
    mapPropsToValues({ neighborhood,roomtype,accomodates,bedrooms,reviews,wifi,cabletv,washer,kitchen }) {
      return {
        neighborhood: neighborhood || "",         
        roomtype: roomtype || "",
        accomodates: accomodates || "",
        bedrooms: bedrooms || "",
        accomreviewsodates: reviews || "",
        wifi: wifi || false,
        cabletv: cabletv || false,
        washer: washer || false,
        kitchen: kitchen || false
      };
    },
    handleSubmit(values, { resetForm, setStatus }) {
        axios
          .post("https://bnbalyze.herokuapp.com/properties", values)
          .then(res => {
            // resetForm();
            setStatus(res.data);
            console.log(res.data);
          })
          .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
          });
    }
  })(addPropertyForm);

export default AddPropertyForm