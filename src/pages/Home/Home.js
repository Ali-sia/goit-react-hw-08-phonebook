import { Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h3">Welcome to contact list!</Typography>
      <Typography variant="p" sx={{ fontSize: '22px' }}>
        To add and save contacts - log in or create a new account💁‍♀️
      </Typography>
    </Box>
  );
}
