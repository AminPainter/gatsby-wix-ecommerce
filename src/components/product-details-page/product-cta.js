import React from 'react';
import { Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Formik } from 'formik';

import AddToCart from 'components/cart/add-to-cart';
import { Button, Icon } from 'ui';
import { handleProductShare } from 'utils/helpers';
import { useCreateBackInStockMutation } from 'hooks';
import store from 'storage/main';

const ProductCTA = ({ productInCart, product, quantity, variantId }) => (
  <Stack gap={1}>
    {productInCart ? (
      <AlreadyInCart />
    ) : product.stock.inStock ? (
      <AddProductToCart product={product} quantity={quantity} variantId={variantId} />
    ) : (
      <OutOfStock product={product} />
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

const OutOfStock = ({ product }) => {
  const initialValues = {
    notifyEmailAddress: '',
  };

  const mutation = useCreateBackInStockMutation();

  const handleSubmit = values => {
    mutation.mutate({ product, notifyEmailAddress: values.notifyEmailAddress });
  };

  if (mutation.isSuccess)
    return (
      <Tooltip title='We will notify you once this item is back in stock' arrow>
        <div>
          <Button endIcon={<Icon name='Bell' />} sx={{ width: '100%' }} disabled>
            Notification added
          </Button>
        </div>
      </Tooltip>
    );

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Typography variant='body2' mb={1}>
            This item is out of stock😔
          </Typography>
          <Stack direction='row' gap={1}>
            <TextField
              type='email'
              name='notifyEmailAddress'
              label='Email Address'
              fullWidth
              value={formik.values.notifyEmailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <Button type='submit' startIcon={<Icon name='Bell' />} loading={formik.isSubmitting}>
              Notify
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};
