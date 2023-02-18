// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts.operations';
import { getIsLoading } from '../../redux/contacts/contacts.selectors';

import { StyledButton } from '../App.styled';
import { ContactItem } from './Contact.styled';

import { toast } from 'react-hot-toast';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const { id, name, number } = contact;
  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success('Successfully delete', {
        autoClose: 1500,
      });
    } catch {
      toast.error('Ooops, try again', {
        autoClose: 1500,
      });
    }
  };

  return (
    <ContactItem key={id}>
      <p>
        {name}, {number}
      </p>
      <StyledButton type="button" disabled={isLoading} onClick={handleDelete}>
        Delete
      </StyledButton>
    </ContactItem>
  );
};

export default Contact;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
