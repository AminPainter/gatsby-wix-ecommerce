import { useQuery } from 'react-query';

import { queryKeys } from 'utils/app-constants';
import wixClient from 'config/wix';

const useUser = () => {
  const isLoggedIn = wixClient.auth.loggedIn();

  const { data, isLoading, error } = useQuery(
    queryKeys.getMyMember,
    () => wixClient.members.getCurrentMember(),
    { enabled: isLoggedIn, cacheTime: Infinity, staleTime: Infinity }
  );

  return {
    user: data?.member,
    isLoading,
    isLoggedIn,
    error: error,
  };
};

export default useUser;
