import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts.selectors';

// import PropTypes from 'prop-types';
import { NotFound } from 'components/NotFound/NotFound';
import Contact from '../Contact/index';
import List from '@mui/material/List';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeFilter) ||
      contact.number.includes(normalizeFilter)
  );

  return (
    <List>
      {filteredContacts.length ? (
        filteredContacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })
      ) : (
        <NotFound />
      )}
    </List>
  );
};

export default ContactList;
