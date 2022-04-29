import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
