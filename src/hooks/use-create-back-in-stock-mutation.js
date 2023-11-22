import { useMutation } from 'react-query';

import wixClient from 'config/wix';
import apiHandler from 'utils/api-handler';

const useCreateBackInStockMutation = () => {
  const mutation = useMutation(
    apiHandler(async ({ product, notifyEmailAddress }) => {
      await wixClient.backInStockNotifications.createBackInStockNotificationRequest(
        {
          catalogReference: {
            appId: process.env.GATSBY_WIX_ECOM_APP_ID,
            catalogItemId: product._id,
          },
          email: notifyEmailAddress,
          itemUrl: window.location.href,
        },
        {
          image: product.media.mainMedia?.thumbnail.url,
          name: product.name,
          price: product.price.price.toFixed(),
        }
      );
    })
  );

  return mutation;
};

export default useCreateBackInStockMutation;
