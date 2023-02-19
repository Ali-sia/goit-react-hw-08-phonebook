import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import { Form } from './LoginForm.styled';

import { toast } from 'react-hot-toast';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      await dispatch(
        logIn({
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
        Email
        <EnterInput type="email" name="email" required />
      </EnterLabel>
      <EnterLabel>
        Password
        <EnterInput type="password" name="password" required />
      </EnterLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </Form>
  );
};
