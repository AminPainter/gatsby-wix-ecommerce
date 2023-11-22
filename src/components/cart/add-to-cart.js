import React, { useState } from 'react';
import { Tooltip } from '@mui/material';

import { useCart } from 'hooks';
import { Button, Icon } from 'ui';
import { isProductInCart } from 'utils/helpers';
import store from 'storage/main';

const AddToCart = ({ productId, quantity, variantId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { cart, addToCart } = useCart();
  const isInCart = Boolean(isProductInCart(cart, productId));

  const handleAddToCart = async () => {
    setIsLoading(true);
    await addToCart(productId, quantity, variantId);
    store.isCartOpen = true;
    setIsLoading(false);
  };

  return (
    <Tooltip title={isInCart ? 'Item already in cart' : ''} arrow>
      <div>
        <Button
          sx={{ width: '100%' }}
          loading={isLoading}
          disabled={isInCart}
          onClick={handleAddToCart}
          size='small'
          startIcon={<Icon name='ShoppingCart' />}>
          Add to cart
        </Button>
      </div>
    </Tooltip>
  );
};

export default AddToCart;
