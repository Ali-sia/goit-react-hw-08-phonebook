import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';

import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import { getIsLoading } from 'redux/contacts/contacts.selectors';

import { Typography } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <Typography variant="h4" gutterBottom>
          Your contacts
        </Typography>
      </Helmet>
      <ContactForm />
      <Typography variant="h4" gutterBottom sx={{ marginTop: '15px' }}>
        Contacts list
      </Typography>
      <Filter />
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
