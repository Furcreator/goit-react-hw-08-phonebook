import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Li, Name, Ul } from './ContactsList.styled';

import { useEffect } from 'react';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}

      {filteredContacts.length > 0 && (
        <Ul>
          {filteredContacts.map(item => {
            return (
              <Li key={item.id}>
                <Name>{item.name}: </Name> <p>{item.number}</p>
                <StyledButton
                  type="button"
                  onClick={() => dispatch(deleteContact(item.id))}
                >
                  Delete
                </StyledButton>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
};
export default ContactList;
