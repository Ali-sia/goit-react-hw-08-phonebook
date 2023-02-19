import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';

import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
          label="Username"
          variant="filled"
          type="text"
          name="name"
          required
          sx={{
            marginBottom: '20px',
          }}
        />
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

        <Button variant="contained">Sign up</Button>
      </FormGroup>
    </form>

    // <Form onSubmit={handleSubmit} autoComplete="off">
    //   <EnterLabel>
    //     Username
    //     <EnterInput
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </EnterLabel>
    //   <EnterLabel>
    //     Email
    //     <EnterInput
    //       type="email"
    //       name="email"
    //       // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    //       required
    //     />
    //   </EnterLabel>
    //   <EnterLabel>
    //     Password
    //     <EnterInput
    //       type="password"
    //       name="password"
    //       pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
    //       required
    //     />
    //   </EnterLabel>
    //   <StyledButton type="submit">Register</StyledButton>
    // </Form>
  );
};
