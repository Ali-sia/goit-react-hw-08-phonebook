import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operations';

import { toast } from 'react-hot-toast';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

import { ColorButton } from 'components/assetsStyles/ButtonStyledFromMUI';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      console.log('form.elements.email.value :>> ', form.elements.email.value);
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
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          required
          sx={{
            marginBottom: '20px',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          required
          sx={{
            marginBottom: '20px',
          }}
        />

        <ColorButton variant="contained" type="submit">
          Log In
        </ColorButton>
      </FormGroup>
    </form>
  );
};
