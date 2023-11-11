import React from 'react';
import { Link } from 'gatsby';
import { IconButton, Stack, Tooltip, Typography, styled } from '@mui/material';

import { Counter, Icon } from 'ui';
import { useCart } from 'hooks';
import store from 'storage/main';

const CartItem = ({ lineItemId, name, image, alt, lineTotal, quantity, backlink, variantId }) => {
  const { updateCartItemQuantity } = useCart();
  // const { variant } = useVariant(variantId);

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <ProductImage src={image} alt={alt} />

      <Stack gap={1} flex={1} alignItems='center'>
        <Typography
          textTransform='capitalize'
          component={Link}
          to={backlink}
          onClick={() => {
            store.isCartOpen = false;
          }}>
          <Stack direction='row' alignItems='center'>
            <Icon name='ArrowUpRight' />
            {name}
          </Stack>
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' gap={0.5}>
          <Tooltip title='Remove from cart' arrow>
            <IconButton
              sx={{ order: { xs: 100, md: 'initial' } }}
              onClick={() => updateCartItemQuantity(lineItemId, 0)}>
              <Icon name='Trash' />
            </IconButton>
          </Tooltip>

          <Counter
            count={quantity}
            minCount={0}
            handleChange={newQuantity => updateCartItemQuantity(lineItemId, newQuantity)}
          />
        </Stack>
      </Stack>

      <Typography>{lineTotal}</Typography>
    </Stack>
  );
};

export default CartItem;

const ProductImage = styled('img')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '8rem',
  width: '6rem',
  objectFit: 'cover',
  borderRadius: theme.borderRadius.tiny,
}));
