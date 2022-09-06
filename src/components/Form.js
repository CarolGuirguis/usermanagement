import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector, connect } from "react-redux";
import { addUser } from "../store/users/users.actions";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function Example () {
  const dispatch = useDispatch();
  
     return (
      <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await sleep(500);
        dispatch(addUser(JSON.stringify(values,null,2)));
        console.log();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <br/>
          <Field name="firstName" placeholder="Enter Name" />
          <br/>
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <Field name="lastName" placeholder="Enter Name" />
          <br/>
          <label htmlFor="email">Email</label>
          <br/>
          <Field name="email" placeholder="Enter Email" type="email" />
          <br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
 );}


