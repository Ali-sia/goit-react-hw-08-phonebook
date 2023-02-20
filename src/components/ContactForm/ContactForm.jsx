import { useState } from 'react';
import { addContact } from '../../redux/contacts/contacts.operations';
import { getContacts } from '../../redux/contacts/contacts.selectors';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-hot-toast';

// import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ColorButton } from 'components/ButtonStyledFromMUI';

import { nanoid } from '../../../node_modules/nanoid/index';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    // if contact already exist
    if (contacts.find(contact => contact.name === newContact.name)) {
      toast.error(`${name} is already in contacts`, {
        autoClose: 1500,
      });
      return;
    }

    dispatch(addContact(newContact));
    toast.success(`${name} add to your contacts`, {
      autoClose: 1500,
    });

    setName(' ');
    setNumber(' ');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Add contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup
          sx={{
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Contact name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            required
            sx={{
              marginBottom: '20px',
            }}
          />
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChangeNumber}
            required
            sx={{
              marginBottom: '20px',
            }}
          />

          <ColorButton variant="contained" type="submit">
            Add contact
          </ColorButton>
        </FormGroup>
      </form>
    </Box>
  );
};

export default ContactForm;
