import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Badge, IconButton, Stack, styled } from '@mui/material';

import { navigationLinks } from 'utils/data';
import { Icon } from 'ui';
import { useCart } from 'hooks';
import store from 'storage/main';
import logoImg from 'images/logo.png';

const Navigation = () => {
  const { cart } = useCart();

  return (
    <NavBar>
      <Stack component='ul' direction='row' gap={3} textTransform='capitalize'>
        {navigationLinks.map((navLink, idx) => (
          <li key={idx}>
            <Link to={navLink.href}>{navLink.title}</Link>
          </li>
        ))}
      </Stack>

      <Logo src={logoImg} alt='LOGO' />

      <Stack direction='row' gap={2}>
        <IconButton>
          <Icon name='Search' color='neutral.black' />
        </IconButton>

        <IconButton
          onClick={() => {
            store.isCartOpen = true;
          }}>
          <Badge
            badgeContent={cart?.lineItems.length || 0}
            showZero
            color='primary'
            sx={{ '& .MuiBadge-badge': { color: '#fff' } }}>
            <Icon name='ShoppingCart' color='neutral.black' />
          </Badge>
        </IconButton>

        <IconButton>
          <Icon name='LogIn' color='neutral.black' />
        </IconButton>
      </Stack>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(16px) saturate(180%)',
  boxShadow: 'none',
}));

const Logo = styled('img')(({ theme }) => ({
  width: '3rem',
}));
