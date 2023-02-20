import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import AppBar from '@mui/material/AppBar';

export const AppBar1 = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: '15px',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
