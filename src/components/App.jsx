import { ContactForm } from './ContactForm';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { addMyContact, removeMyContact, filterMyContacts } from 'redux/store';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const addContact = ({ name, number }) => {
    for (const contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is already in contacts.`);
        return;
      }
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addMyContact(contact));
  };

  const deleteContact = contactId => {
    dispatch(removeMyContact(contactId));
  };

  const changeFilter = e => {
    dispatch(filterMyContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList items={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};

export default App;
