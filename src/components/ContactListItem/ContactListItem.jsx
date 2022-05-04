import { Item } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/myContactsSlice';
import { RotatingLines } from 'react-loader-spinner';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  return (
    <Item>
      {name}: {number}
      <button
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContacts(id)}
      >
        {isDeleting && <RotatingLines width="10" />} Delete
      </button>
    </Item>
  );
};
