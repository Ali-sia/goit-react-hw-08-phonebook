import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

import { ColorButton } from 'components/assetsStyles/ButtonStyledFromMUI';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <Typography as="p" sx={{ fontSize: '24px' }}>
        {user.name}
      </Typography>
      <ColorButton
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{ marginRight: '15px' }}
      >
        Log out
      </ColorButton>
    </Box>
  );
};
