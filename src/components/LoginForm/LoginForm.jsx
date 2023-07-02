import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import { Button, Forma, Input, Label, Wrap } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    email: Yup.string().required('Please provide a name'),
    password: Yup.string().required('Please provide a password'),
  });
  const [email] = useState('');
  const [password] = useState('');
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={{ email, password }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <h2>Log In</h2>
        <Wrap>
          <Label htmlFor="email">
            Email
            <Input type="text" name="email" placeholder="Your email" />
            <ErrorMessage component="div" name="email" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              placeholder="Your password"
            />
            <ErrorMessage component="div" name="password" />
          </Label>
        </Wrap>
        <Button type="submit">Log In</Button>
      </Forma>
    </Formik>
  );
};

export default LoginForm;
