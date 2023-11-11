import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useProducts = () => {
  const { data, isLoading, error } = useQuery(queryKeys.getAllProducts, () =>
    wixClient.products.queryProducts().limit(6).find()
  );

  return { products: data?.items, isLoading, error };
};

export default useProducts;
