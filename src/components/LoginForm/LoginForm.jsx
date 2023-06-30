import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const LoginForm = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required('Please provide a name'),
    password: Yup.string().required('Please provide a password'),
  });
  const [name] = useState('');
  const [password] = useState('');
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={{ name, password }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Your name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Your password" />
          <ErrorMessage component="div" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
