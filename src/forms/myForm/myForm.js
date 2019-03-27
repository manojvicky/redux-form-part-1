import React from "react";
import { Field, reduxForm } from "redux-form";
console.log("reduxForm", reduxForm);

const validate = values => {
  const errors = {};
  if (!values.FirstName) {
    errors.FirstName = "Please enter your First Name";
  }
  if (!values.LastName) {
    errors.LastName = "Please enter your Last Name";
  }
  if (!values.Age) {
    errors.Age = "Please enter your Age";
  }
  console.log("hello Values", values, errors);

  return errors;
};
const renderField = props => {
  console.log("hello inside", props);
  const {
    input,
    label,
    type,
    meta: { touched, error, warning }
  } = props;
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  );
};
let myForm = props => {
  console.log("hello Props", props);
  let { error, dirty } = props;
  return (
    <form style={{ padding: "20px" }} onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <Field
          name="FirstName"
          label="First Name"
          type="text"
          component={renderField}
        />
        <Field
          name="LastName"
          label="Last Name"
          type="text"
          component={renderField}
        />
        <Field name="Age" label="Age" type="text" component={renderField} />
      </fieldset>
      <button type="submit">My form</button>
    </form>
  );
};
myForm = reduxForm({ form: "myForm", validate })(myForm);
export default myForm;
