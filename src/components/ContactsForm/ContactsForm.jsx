import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

// import { useDispatch, useSelector } from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'too short')
    .max(10, 'too long'),
});

const ContactsForm = () => {
  const [name] = useState('');
  const [number] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(4),
      ...values,
    };
    // if (checkNewNameRepeate(values.name)) {
    //   alert(`${name} is already in contacts!`);
    //   return;
    // } else {
    //   dispatch(addContact(newContact));
    // }
    resetForm();
  };
  //   const checkNewNameRepeate = newName => {
  //     let arrayOfNamesInLowerCase = contacts.map(item =>
  //       item.name.toLocaleLowerCase()
  //     );
  //     return arrayOfNamesInLowerCase.includes(newName.toLocaleLowerCase());
  //   };
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Your name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" placeholder="Your number" />
          <ErrorMessage component="div" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
