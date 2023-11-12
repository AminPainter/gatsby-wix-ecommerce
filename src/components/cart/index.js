import React from 'react';
import { Link as GatsbyLink, Link } from 'gatsby';
import { useSnapshot } from 'valtio';
import { Box, Divider, Drawer, IconButton, Stack, Typography, styled } from '@mui/material';

import CartItem from './cart-item';
import { Icon, Button } from 'ui';
import { useCart } from 'hooks';
import store from 'storage/main';

const Cart = () => {
  const snap = useSnapshot(store);
  const { cart } = useCart();

  const handleCloseCart = () => {
    store.isCartOpen = false;
  };

  return (
    <Drawer open={snap.isCartOpen} anchor='right' onClose={handleCloseCart}>
      <CartScreen>
        <Box py={2} px={4}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h4'>Cart</Typography>

            <IconButton onClick={handleCloseCart}>
              <Icon name='X' color='neutral.black' />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 2 }} />
          {cart?.lineItems.length > 0 ? (
            <CartItemList gap={3}>
              {cart.lineItems.map((item, idx) => (
                <div key={item._id}>
                  <CartItem item={item} />
                  {idx !== cart.lineItems.length - 1 && <Divider sx={{ mt: 2 }} />}
                </div>
              ))}
            </CartItemList>
          ) : (
            <Stack height='80vh' gap={4} justifyContent='center' alignItems='center'>
              <Typography variant='h5' textAlign='center'>
                Your cart is empty!
              </Typography>
              <Typography width='40%' textAlign='center'>
                Looks like you haven't added anything to your cart. Explore top categories now!
              </Typography>

              <Link to='/shop'>
                <Button
                  endIcon={<Icon name='TrendingUp' />}
                  onClick={() => {
                    store.isCartOpen = false;
                  }}>
                  View products
                </Button>
              </Link>
            </Stack>
          )}
        </Box>

        {cart?.lineItems.length > 0 && (
          <CartSummary>
            <Stack direction='row' justifyContent='space-between'>
              <Typography
                variant='body2'
                fontWeight={300}
                textTransform='uppercase'
                letterSpacing={2}>
                subtotal
              </Typography>
              <Typography variant='body2'>{cart?.subtotal.formattedConvertedAmount}</Typography>
            </Stack>

            <Button
              component={GatsbyLink}
              to='/checkout'
              startIcon={<Icon name='CreditCard' />}
              onClick={handleCloseCart}>
              Proceed to checkout
            </Button>
          </CartSummary>
        )}
      </CartScreen>
    </Drawer>
  );
};

export default Cart;

const CartScreen = styled(Stack)(({ theme }) => ({
  width: '40vw',
  height: '100%',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
}));

const CartItemList = styled(Stack)(({ theme }) => ({
  overflow: 'auto',
  height: '60vh',
  paddingRight: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
  },
}));

const CartSummary = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A200,
  padding: theme.spacing(3, 4),
  gap: theme.spacing(3),
}));
