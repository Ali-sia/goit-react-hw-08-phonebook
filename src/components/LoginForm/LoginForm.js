import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';
import { Form, Label } from './LoginForm.styled';

import { toast } from 'react-hot-toast';

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
      <Label>
        Email
        <input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <input type="password" name="password" required />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
