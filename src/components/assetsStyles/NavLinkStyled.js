import { styled } from '@mui/material/styles';
import { NavLink as NavLinkBase } from 'react-router-dom';

export const NavLink = styled(NavLinkBase)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '24px',
  transition: 'color 150ms linear',
  '&.active': {
    color: '#fbc02d',
  },
  '&:hover': {
    color: '#fbc02d',
  },
}));
