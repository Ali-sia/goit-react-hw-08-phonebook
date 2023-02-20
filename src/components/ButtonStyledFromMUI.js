import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[700]),
  backgroundColor: yellow[700],
  '&:hover': {
    backgroundColor: yellow[800],
  },
}));
