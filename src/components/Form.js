import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Example = () => (
  <div>
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
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
);

export default Example;
