import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useProductDetails = slug => {
  const { data, isLoading } = useQuery([queryKeys.getProduct, slug], () =>
    wixClient.products.queryProducts().eq('slug', slug).find()
  );

  return { product: data?.items[0], isLoading };
};

export default useProductDetails;
