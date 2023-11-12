import React from 'react';
import { Link } from 'gatsby';
import { IconButton, Stack, Tooltip, Typography, styled } from '@mui/material';

import { Counter, Icon } from 'ui';
import { useCart } from 'hooks';
import store from 'storage/main';
import { getImageFromWixMedia } from 'utils/helpers';

const CartItem = ({ item }) => {
  const { updateCartItemQuantity } = useCart();

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <ProductImage src={getImageFromWixMedia(item.image)} alt='PRODUCT' />

      <Stack gap={1} flex={1} alignItems='center'>
        <Typography
          textTransform='capitalize'
          component={Link}
          to={`/products/${item.url.split('/').at(-1)}`}
          onClick={() => {
            store.isCartOpen = false;
          }}>
          <Stack direction='row' alignItems='center'>
            <Icon name='ArrowUpRight' />
            {item.productName.original}
          </Stack>
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' gap={0.5}>
          <Tooltip title='Remove from cart' arrow>
            <IconButton
              sx={{ order: { xs: 100, md: 'initial' } }}
              onClick={() => updateCartItemQuantity(item._id, 0)}>
              <Icon name='Trash' />
            </IconButton>
          </Tooltip>

          <Counter
            count={item.quantity}
            minCount={0}
            handleChange={newQuantity => updateCartItemQuantity(item._id, newQuantity)}
          />
        </Stack>
      </Stack>

      <Typography>{item.price.formattedConvertedAmount}</Typography>
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
