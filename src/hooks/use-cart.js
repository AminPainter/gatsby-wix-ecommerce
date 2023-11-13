import { useQuery, useQueryClient } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';
import apiHandler from 'utils/api-handler';

const useCart = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    queryKeys.getCart,
    async () => {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens) wixClient.auth.setTokens(tokens);
      try {
        return await wixClient.currentCart.getCurrentCart();
      } catch (err) {
        return null;
      }
    },
    { retry: false }
  );

  const addToCart = apiHandler(async (productId, quantity = 1, variantId = null) => {
    const catalogReference = {
      appId: process.env.GATSBY_WIX_ECOM_APP_ID,
      catalogItemId: productId,
    };
    if (variantId) catalogReference.options = { variantId };

    const { cart: updatedCart } = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference,
          quantity,
        },
      ],
    });

    queryClient.setQueryData(queryKeys.getCart, updatedCart);
  });

  const updateCartItemQuantity = apiHandler(async (lineItemId, quantity) => {
    let updatedCart;

    if (quantity === 0)
      updatedCart = (await wixClient.currentCart.removeLineItemsFromCurrentCart([lineItemId])).cart;
    else
      updatedCart = (
        await wixClient.currentCart.updateCurrentCartLineItemQuantity([
          {
            _id: lineItemId,
            quantity,
          },
        ])
      ).cart;

    queryClient.setQueryData(queryKeys.getCart, updatedCart);
  });

  return {
    cart: data,
    isCartLoading: isLoading,
    addToCart,
    updateCartItemQuantity,
  };
};

export default useCart;
