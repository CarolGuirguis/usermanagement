import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector, connect } from "react-redux";
import { addUser } from "../store/users/users.actions";
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Col,Row} from 'react-bootstrap';
 

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function Example ({handleClose}) {
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
        handleClose();
        
      }}
    >
      {({ isSubmitting }) => (
        <Container fluid>
          <Row>
          <Col className='header'>
            <div className='headertext'>Add New User</div>
        
        </Col>
        </Row>
        <Row>
        <Form>
          <br/>
          <label className='bold' htmlFor="firstName">First Name</label>
          <br/>
          <Field name="firstName" placeholder="Enter First Name" />
          <br/>
          <br/>
          <label className='bold' htmlFor="lastName">Last Name</label>
          <br/>
          <Field name="lastName" placeholder="Enter Last Name" />
          <br/>
          <br/>
          <label className='bold' htmlFor="email">Email</label>
          <br/>
          <Field name="email" placeholder="Enter Email" type="email" />
          <br/>
          <hr/>
          <Row className='footer'>
            <Col>
          <button className='btn btn-light buttonf cancel' onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </button>
          <button className='btn btn-success buttonf' type="submit" disabled={isSubmitting}>
           Add User
          </button>
          
          </Col>
          </Row>
        </Form>
        </Row>
        </Container>
      )}
    </Formik>
  </div>
 );}


