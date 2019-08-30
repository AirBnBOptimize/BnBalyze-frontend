import React, {useState,useContext,useEffect} from 'react';
import { withFormik,Form,Field } from 'formik';
import axios from "axios";
import {neighborhood} from '../../utilities/neighborhood.js';
import {roomType} from '../../utilities/roomType.js';
import "./addPropertyForm.scss";

 function addPropertyForm(values,status, props) {

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
        <div className="formDiv">
        <h2 className="margin-top"> Add a Property </h2>
        <Form className='add-property-form'>
        <div className='title' key=""> 
             Title 
             <Field type="text" name="title" placeholder="Title" key="title" />
             </div>
            <div className='neighborhood'>
                Neighborhood
                <Field component="select" name="neighborhood">
                {Object.keys(hood_dict).map((item)=>{
                    return <option value={item.toString()} key={item}>{item}</option>
                })}
                </Field>
             </div>
             <div className='roomtype'> 
             RoomType
            <Field component="select" name="room_type">
                {Object.keys(room_dict).map((item)=>{
                    return <option value={item.toString()} key={item}>{item}</option>
                })}
            </Field>
             </div>
             <div className='url' key=""> 
             URL 
             <Field type="text" name="url" placeholder="URL" key="url" />
             </div>
             <div className='photo_url' key=""> 
             Photo URL 
             <Field type="text" name="photo_url" placeholder="Photo URL" key="photo_url" />
             </div>
             <div className='accommodates' key=""> 
             Accommodates 
             <Field type="number" name="accommodates" placeholder="Accommodates" key="accommodates" />
             </div>
             <div className='bedrooms'>
             Bedrooms
             <Field type="number" name="bedrooms" placeholder="Bedrooms" key="bedrooms" />
             
             </div>
             <div className='reviews'>
             # of Reviews
             <Field type="number" name="number_of_reviews" placeholder="# of Reviews" key="reviews" />
             </div>
             <div className='current_price' key=""> 
             Current Price 
             <Field type="number" name="current_price" placeholder="Current Price" key="current_price" />
             </div>
             <div className='wifi'>
             Wifi
             <Field type="checkbox" name="wifi" checked={values.wifi} key="wifi" />
             </div>
             <div className='cabletv'>
             Cable TV
             <Field type="checkbox" name="cable_tv" checked={values.cable_tv} key="cabletv" />
             </div>
             <div className='washer'>
             Washer
             <Field type="checkbox" name="washer" checked={values.washer} key="washer" />
             </div>
             <div className='kitchen'>
             Kitchen
             <Field type="checkbox" name="kitchen" checked={values.kitchen} key="kitchen" />
             </div>        
             <div className="buttonDiv">
                <button type="submit"> Add </button> 
            </div>
            
         </Form>
         </div>
    );
}

const AddPropertyForm = withFormik({
    mapPropsToValues({ neighborhood,room_type,accommodates,bedrooms,number_of_reviews,wifi,cable_tv,washer,kitchen, current_price, url, photo_url, title }) {

      return {
        title: title || null,
        photo_url: photo_url || null,
        url: url || null,
        neighborhood: neighborhood || '',         
        room_type: room_type || '',
        accommodates: accommodates || 0,
        bedrooms: bedrooms || 0,
        number_of_reviews: number_of_reviews || 0,
        wifi: wifi || false,
        cable_tv: cable_tv || false,
        washer: washer || false,
        kitchen: kitchen || false,
        current_price: current_price || null
      };
    },
    handleSubmit(values, { props, resetForm, setStatus }, history) {
        const DSvalues={...values};
        DSvalues.neighborhood=neighborhood(values.neighborhood);
        DSvalues.room_type=roomType(values.room_type);
        DSvalues.wifi=DSvalues.wifi?1:0;
        DSvalues.cable_tv=DSvalues.cable_tv?1:0;
        DSvalues.washer=DSvalues.washeres?1:0;
        DSvalues.kitchen=DSvalues.kitchen?1:0;
        delete DSvalues['title'];
        delete DSvalues['current_price'];
        delete DSvalues['url'];
        delete DSvalues['photo_url']
        Object.keys(DSvalues).filter(x => x !== 'current_price' || x !== 'url' || x !== 'photo_url' || x !== 'title')

        console.log("VALS",values,"DS",DSvalues);
        axios
        .post("https://bnbalyze.herokuapp.com/properties/userproperties", DSvalues)
        .then(res => {
          resetForm();
          // setStatus(res.data);
          console.log("Data",res.data);

            //   ***SECOND CALL***
            values={...values,'recommendation_price':res.data};
            axios
            .post("https://bnbalyze.herokuapp.com/properties/account", values)
            .then(res => {
                // resetForm();
                console.log("Hello");
                // setStatus(res.data);
                console.log("Data",res.data);
                props.history.push("/welcome")
            })
            .catch(err => {
                console.log("ERR",err); // There was an error creating the data and logs to console
            });
            //   ***SECOND CALL***
          
        })
        .catch(err => {
          console.log("ERR",err); // There was an error creating the data and logs to console
        });
    }
  })(addPropertyForm);

export default AddPropertyForm
// https://bnbalyze.herokuapp.com/properties/id
// .delete
// .update