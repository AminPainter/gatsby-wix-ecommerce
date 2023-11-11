import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useVariant = variantId => {
  const { data, isLoading } = useQuery(
    [queryKeys.getVariant, variantId],
    () => wixClient.products.getStoreVariant(variantId),
    {
      enabled: Boolean(variantId),
    }
  );

  return { variant: data?.items[0], isLoading };
};

export default useVariant;
