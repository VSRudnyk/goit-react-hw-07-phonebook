import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding-left: 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 350px;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
