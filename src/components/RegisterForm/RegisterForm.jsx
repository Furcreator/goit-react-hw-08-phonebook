import {
  Button,
  Forma,
  Input,
  Label,
  Wrap,
} from 'components/LoginForm/LoginForm.styled';
import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required('Please provide a name'),
    email: Yup.string().email().required('Please provide a email'),
    password: Yup.string()
      .required('Please provide a valid password')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
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
      <Forma autoComplete="off">
        <h2>Registration</h2>
        <Wrap>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" placeholder="Your name" />
            <ErrorMessage component="div" name="name" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" placeholder="Your email" />
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

        <Button type="submit">Register</Button>
      </Forma>
    </Formik>
  );
};

export default RegisterForm;
