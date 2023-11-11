import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useCategoryProducts = categoryId => {
  const { data, isLoading } = useQuery(
    [queryKeys.getAllProducts, categoryId],
    () => wixClient.products.queryProducts().eq('collectionIds', categoryId).find(),
    { enabled: Boolean(categoryId) }
  );

  return { products: data?.items, isLoading };
};

export default useCategoryProducts;
