import React from 'react';
import { Stack, Typography } from '@mui/material';

import AddToCart from 'components/cart/add-to-cart';
import { Button, Icon } from 'ui';
import { handleProductShare } from 'utils/helpers';
import store from 'storage/main';

const ProductCTA = ({ productInCart, product, quantity, variantId }) => (
  <Stack gap={1}>
    {productInCart ? (
      <AlreadyInCart />
    ) : product.stock.inStock ? (
      <AddProductToCart product={product} quantity={quantity} variantId={variantId} />
    ) : (
      <OutOfStock productName={product.name} />
    )}

    <Button
      startIcon={<Icon name='Share2' color='neutral.black' />}
      variant='secondary'
      onClick={() => handleProductShare(product.slug)}>
      Share product
    </Button>
  </Stack>
);

export default ProductCTA;

const AlreadyInCart = () => (
  <>
    <Typography variant='body2'>This item is already in your cart!</Typography>
    <Button
      startIcon={<Icon name='ShoppingCart' color='common.white' />}
      onClick={() => (store.isCartOpen = true)}>
      View cart
    </Button>
  </>
);

const AddProductToCart = ({ product, quantity, variantId }) => (
  <AddToCart
    productId={product._id}
    quantity={quantity}
    variantId={product.manageVariants ? variantId : null}
  />
);

const OutOfStock = ({ productName }) => (
  <>
    <Typography variant='body2'>This item is out of stock😔</Typography>
    <Button
      startIcon={<Icon name='MessageSquare' color='common.white' />}
      onClick={() =>
        console.log(`Hey, I would like to know when ${productName} will be back in stock.`)
      }>
      Notify me when its back in stock
    </Button>
  </>
);
