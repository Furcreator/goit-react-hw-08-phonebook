import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required('Please provide a name'),
    email: Yup.string().email().required('Please provide a email'),
    password: Yup.string().required('Please provide a valid password'),
  });
  const [name] = useState('');
  const [email] = useState('');
  const [password] = useState('');
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={{ name, email, password }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Your name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <Field type="tel" name="email" placeholder="Your email" />
          <ErrorMessage component="div" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="tel" name="password" placeholder="Your password" />
          <ErrorMessage component="div" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
