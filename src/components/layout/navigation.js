import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Badge, IconButton, Stack, Tooltip, styled } from '@mui/material';

import wixClient from 'config/wix';
import { navigationLinks } from 'utils/data';
import { cookieNames } from 'utils/app-constants';
import { Icon } from 'ui';
import { useCart, useUser } from 'hooks';
import store from 'storage/main';
import logoImg from 'images/logo.png';

const Navigation = () => {
  const { cart } = useCart();
  const { isLoggedIn, user } = useUser();

  const handleLogin = async () => {
    const oauthData = wixClient.auth.generateOAuthData(
      `${window.location.origin}/login-callback`,
      window.location.href
    );
    localStorage.setItem(cookieNames.OAUTH, JSON.stringify(oauthData));
    const { authUrl } = await wixClient.auth.getAuthUrl(oauthData);
    window.location.assign(authUrl);
  };

  return (
    <NavBar>
      <Stack component='ul' direction='row' gap={3} textTransform='capitalize'>
        {navigationLinks.map((navLink, idx) => (
          <li key={idx}>
            <Link to={navLink.href}>{navLink.title}</Link>
          </li>
        ))}
      </Stack>

      <Link to='/' style={{ display: 'flex' }}>
        <Logo src={logoImg} alt='LOGO' />
      </Link>

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

        {isLoggedIn ? (
          <Tooltip arrow title={user?.profile.nickname}>
            <IconButton component={Link} to='/account'>
              <Icon name='User' color='neutral.black' />
            </IconButton>
          </Tooltip>
        ) : (
          <IconButton onClick={handleLogin}>
            <Icon name='LogIn' color='neutral.black' />
          </IconButton>
        )}
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
