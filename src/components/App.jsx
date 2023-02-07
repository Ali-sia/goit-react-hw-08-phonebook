import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <p>
            Path not resolved, try
            <a href="http://localhost:3000/goit-react-hw-08-phonebook">
              http://localhost:3000/goit-react-hw-08-phonebook
            </a>
          </p>
        }
      />
    </Routes>
  );
};

// // import PropTypes from 'prop-types';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import { getError, getIsLoading } from '../redux/selectors';

// import { GlobalStyle } from './GlobalStyle';
// import { Box } from './Box';

// import ContactList from './ContactList';
// import Filter from './Filter';
// import ContactForm from './ContactForm';
// import Title from './Title/index';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Box pr={4} pl={4} color="text" width="400px">
//       <Title children="Add contact" />
//       <ContactForm />

//       <Title children="Contacts" />
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       {!isLoading && !error && <b>DONE</b>}
//       <ContactList />

//       <GlobalStyle />
//     </Box>
//   );
// };

// // App.propTypes = {
// //   contacts: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.string.isRequired,
// //       name: PropTypes.string.isRequired,
// //       number: PropTypes.string.isRequired,
// //     })
// //   ),
// //   filter: PropTypes.string,
// // };
