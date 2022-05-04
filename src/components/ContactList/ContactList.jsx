import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = ({ items }) => {
  return (
    <>
      {items && (
        <List>
          {items.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
