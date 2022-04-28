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

export default ContactList;
