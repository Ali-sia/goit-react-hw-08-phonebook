// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts.operations';
import { getIsLoading } from '../../redux/contacts/contacts.selectors';

import { toast } from 'react-hot-toast';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
          >
            <DeleteIcon />
          </IconButton>
        }
        sx={{
          borderBottom: '1px solid gray',
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AccountCircleOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
      </ListItem>
    </>
    // <ListItem
    //   key={id}
    //   // sx={{
    //   //   borderBottom: '1px solid gray',
    //   //   // display: 'flex',
    //   //   // justifyContent: 'space-between',
    //   // }}
    // >
    //   <ListItemIcon>
    //     <AccountCircleOutlinedIcon sx={{ marginRight: '12px' }} />
    //   </ListItemIcon>
    //   <ListItemText>
    //     {name}, {number}
    //   </ListItemText>
    //   <IconButton
    //     type="button"
    //     disabled={isLoading}
    //     onClick={handleDelete}
    //     aria-label="delete"
    //     sx={{
    //       maxWidth: '60px',
    //     }}
    //   >
    //     <DeleteOutlineOutlinedIcon />
    //   </IconButton>
    // </ListItem>
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
