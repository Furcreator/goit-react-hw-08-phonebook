const ContactList = () => {
//   const contacts = useSelector(selectFilterContacts);
//   const dispatch = useDispatch();
    const contacts = [] // пустой масив
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <p>{item.name}: </p> <p>{item.number}</p>
            <button
              type="button"
            //   onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
