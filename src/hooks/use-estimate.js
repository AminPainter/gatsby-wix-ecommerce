import { useQuery } from 'react-query';

import wixClient from 'config/wix';
import { queryKeys } from 'utils/app-constants';

const useEstimate = () => {
  const {
    data: estimate,
    isLoading,
    error,
  } = useQuery(queryKeys.getEstimate, () => wixClient.currentCart.estimateCurrentCartTotals(), {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return { estimate, isLoading, error };
};

export default useEstimate;
