import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';

import { toast } from 'react-hot-toast';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    <form onSubmit={handleSubmit}>
      <FormGroup
        sx={{
          maxWidth: '350px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          required
          sx={{
            marginBottom: '20px',
          }}
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          required
          sx={{
            marginBottom: '20px',
          }}
        />

        <Button variant="contained">Log In</Button>
      </FormGroup>
    </form>
    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <EnterLabel>
    //     Email
    //     <EnterInput type="email" name="email" required />
    //   </EnterLabel>
    //   <EnterLabel>
    //     Password
    //     <EnterInput type="password" name="password" required />
    //   </EnterLabel>
    //   <StyledButton type="submit">Log In</StyledButton>
    // </Form>
  );
};
