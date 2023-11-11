import { useQuery } from 'react-query';

import { queryKeys } from 'utils/app-constants';
import wixClient from 'config/wix';

const useCategories = () => {
  const { data, isLoading, error } = useQuery(
    queryKeys.getAllCategories,
    () => wixClient.collections.queryCollections().find(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return { categories: data?.items.slice(1), isLoading, error };
};

export default useCategories;
