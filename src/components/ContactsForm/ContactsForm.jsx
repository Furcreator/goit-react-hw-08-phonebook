import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import {
  Button,
  Forma,
  Label,
  Wrap,
} from 'components/LoginForm/LoginForm.styled';
import { Input } from 'components/Filter/Filter.styled';

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
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(4),
      ...values,
    };
    if (checkNewNameRepeate(values.name)) {
      alert(`${name} is already in contacts!`);
      return;
    } else {
      dispatch(addContact(newContact));
    }
    resetForm();
  };
  const checkNewNameRepeate = newName => {
    let arrayOfNamesInLowerCase = contacts.map(item =>
      item.name.toLocaleLowerCase()
    );
    return arrayOfNamesInLowerCase.includes(newName.toLocaleLowerCase());
  };
  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <Wrap>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" placeholder="Your name" />
            <ErrorMessage component="div" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" placeholder="Your number" />
            <ErrorMessage component="div" name="number" />
          </Label>
        </Wrap>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  );
};

export default ContactsForm;
