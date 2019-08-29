import React, {useState,useContext,useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { withFormik,Form,Field } from 'formik';
import axios from "axios";

 function addPropertyForm() {


    return (
        <div>
        <h3> Add a Property </h3>
        <Form className='add-property-form'>

              <div className='neighborhood'>
                Neighborhood
                <Field type="text" name="neighborhood" placeholder="Name" />
             </div>
             <div className='roomtype'> 
             RoomType
             <Field type="text" name="roomtype" placeholder="Room Type" />
             </div>
             <div className='accomodates'> 
             Accomodates 
             <Field type="text" name="accomodates" placeholder="Accomodates" />
             </div>
             <div className='bedrooms'>
             Bedrooms
             <Field type="text" name="bedrooms" placeholder="Bedrooms" />
             
             </div>
             <div className='reviews'>
             # of Reviews
             <Field type="text" name="reviews" placeholder="# of Reviews" />
             </div>
             <div className='wifi'>
             Wifi
             <Field type="checkbox" name="wifi" checked="" />
             </div>
             <div className='cabletv'>
             Cable TV
             <Field type="checkbox" name="cabletv" checked="" />
             </div>
             <div className='washer'>
             Washer
             <Field type="checkbox" name="washer" checked="" />
             </div>
             <div className='kitchen'>
             Kitchen
             <Field type="checkbox" name="kitchen" checked="" />
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
     }
    //,
    // handleSubmit(values, { resetForm, setErrors, setSubmitting,setStatus }) {
    //   if (values.email === "alreadytaken@atb.dev") {
    //     setErrors({ email: "That email is already taken" });
    //   } else {
    //     axios
    //       .post("https://reqres.in/api/users", values)
    //       .then(res => {
    //         // console.log(res); // Data was created successfully and logs to console
    //         resetForm();
    //         setSubmitting(false);
    //         setStatus(res.data);
    //       })
    //       .catch(err => {
    //         console.log(err); // There was an error creating the data and logs to console
    //         setSubmitting(false);
    //       });
    //   }
    // }
  })(addPropertyForm);

export default AddPropertyForm