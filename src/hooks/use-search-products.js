import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useSearchProducts = searchTerm => {
  const { data, isLoading: isSearching } = useQuery(
    [queryKeys.searchProducts, searchTerm],
    async () => wixClient.products.queryProducts().startsWith('name', searchTerm).find(),
    {
      enabled: Boolean(searchTerm),
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return { products: data?.items, isSearching, results: data?.items.length || 0 };
};

export default useSearchProducts;
