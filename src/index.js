import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import MyForm from "../src/forms/myForm/myForm";
import ContactForm from "../src/forms/contactForm/ContactForm";

const rootEl = document.getElementById("root");
let values = values => {
  console.log("Values", values);
};
ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>My Form</h2>
      <MyForm onSubmit={data => console.log("My Form", data)} />
      <ContactForm onSubmit={data => console.log("Contact Form", data)} />
    </div>
  </Provider>,
  rootEl
);
