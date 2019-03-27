import React from "react";
import { Field, reduxForm } from "redux-form";
const validate = values => {
  const errors = {};
  if (!values.Address) {
    errors.Address = "Please enter your Address";
  }
  if (!values.PhoneNumber) {
    errors.PhoneNumber = "Please enter your Phone Number";
  }
  if (!values.Country) {
    errors.Country = "Please enter your Country";
  }
  console.log("hello contact form errors", values, errors);
  return errors;
};
const blur = values => {
  const errors = {};
  if (!values.Address) {
    errors.Address = "Please enter your Address";
  }
  if (!values.PhoneNumber) {
    errors.PhoneNumber = "Please enter your Phone Number";
  }
  if (!values.Country) {
    errors.Country = "Please enter your Country";
  }
  console.log("hello contact form blur", values, errors);
  return errors;
};
let ContactForm = props => {
  console.log("hello contactform props", props);
  return (
    <form style={{ padding: "20px" }} onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Conatct Information</legend>
        <label htmlFor="Address"> Address </label>
        <Field name="Address" label="Address" type="text" component="input" />
        <label htmlFor="Phone Number">Phone Number</label>
        <Field
          name="PhoneNumber"
          label="Phone Number"
          type="text"
          component="input"
        />
        <label htmlFor="Country">Country</label>
        <Field name="Country" label="Country" type="text" component="input" />
      </fieldset>
      <button type="submit">Contact Form form</button>
    </form>
  );
};
ContactForm = reduxForm({ form: "contactForm", validate, blur })(ContactForm);
export default ContactForm;
