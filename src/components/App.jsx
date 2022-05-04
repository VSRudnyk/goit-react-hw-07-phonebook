import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { useGetContactQuery, filterMyContacts } from 'redux/myContactsSlice';
import { Container } from './App.styled';
import Filter from './Filter';
import { ContactForm } from './ContactForm';
import ContactList from './ContactList';
import { useAddContactMutation } from 'redux/myContactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const { data: contacts } = useGetContactQuery();
  const [addMyContact, { isLoading }] = useAddContactMutation();

  const addContact = value => {
    for (const contact of contacts) {
      if (contact.name === value.name) {
        toast.error(`${value.name} is already in contacts.`);
        return;
      }
    }

    addMyContact(value);
    toast.success(`Contact ${value.name} has been added`);
  };

  const changeFilter = e => {
    dispatch(filterMyContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
      </Container>
      {isLoading ? (
        <InfinitySpin color="grey" />
      ) : (
        <ContactList items={visibleContacts} />
      )}
      <Toaster />
    </>
  );
};

export default App;
