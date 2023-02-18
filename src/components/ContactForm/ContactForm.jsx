import { useState } from 'react';
import { addContact } from '../../redux/contacts/contacts.operations';
import { getContacts } from '../../redux/contacts/contacts.selectors';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-hot-toast';

// import PropTypes from 'prop-types';
import { Box } from '../Box';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';
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

    setName('');
    setNumber('');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      as="form"
      onSubmit={handleSubmit}
    >
      <EnterLabel>
        Name:
        <EnterInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
      </EnterLabel>

      <EnterLabel>
        Number:
        <EnterInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
      </EnterLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </Box>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
// };

export default ContactForm;
