import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';
import { Form } from './RegisterForm.styled';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';

import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();

      form.reset();
      toast.success('Success', {
        autoClose: 1500,
      });
    } catch {
      toast.error('This email already exists or the password is invalid', {
        autoClose: 1500,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <EnterLabel>
        Username
        <EnterInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </EnterLabel>
      <EnterLabel>
        Email
        <EnterInput
          type="email"
          name="email"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </EnterLabel>
      <EnterLabel>
        Password
        <EnterInput
          type="password"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          required
        />
      </EnterLabel>
      <StyledButton type="submit">Register</StyledButton>
    </Form>
  );
};
