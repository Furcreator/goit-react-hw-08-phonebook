import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Li, Name, Ul } from './ContactsList.styled';
import { Button } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );
  return (
    <Ul>
      {filteredContacts.map(item => {
        return (
          <Li key={item.id}>
            <Name>{item.name}: </Name> <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};
export default ContactList;
