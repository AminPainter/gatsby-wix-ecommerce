import React from 'react';

import { useUser } from 'hooks';
import { RingLoader } from 'components/loaders';

const RouteGuard = () => {
  const { isLoading, error, isLoggedIn } = useUser();

  if (error || !isLoggedIn) {
    navigate('/');
    return null;
  }

  if (isLoading) return <RingLoader />;

  return children;
};

export default RouteGuard;
