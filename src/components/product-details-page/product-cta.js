import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';

import AddToCart from 'components/cart/add-to-cart';
import { Button, Icon } from 'ui';
import { handleProductShare } from 'utils/helpers';
import store from 'storage/main';
import wixClient from 'config/wix';
import { Formik } from 'formik';

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

  const handleSubmit = async values => {
    console.log(
      await wixClient.backInStockNotifications.createBackInStockNotificationRequest(
        {
          catalogReference: {
            appId: process.env.GATSBY_WIX_ECOM_APP_ID,
            catalogItemId: product._id,
          },
          email: values.notifyEmailAddress,
          itemUrl: window.location.href,
        },
        {
          image: product.media.mainMedia?.thumbnail.url,
          name: product.name,
          price: JSON.stringify({ gte: product.price.price.toString() }),
        }
      )
    );
  };

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
            <Button type='submit' startIcon={<Icon name='Bell' />}>
              Notify
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};
