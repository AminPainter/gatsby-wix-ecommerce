import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';
import { useQueryClient } from 'react-query';

import wixClient from 'config/wix';
import { Section } from 'ui';
import { cookieNames, queryKeys } from 'utils/app-constants';
import apiHandler from 'utils/api-handler';
import { RingLoader } from 'components/loaders';

const LoginCallbackPage = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    apiHandler(async () => {
      // Get back the oauth data generated before login
      const oauthData = JSON.parse(localStorage.getItem(cookieNames.OAUTH));
      localStorage.removeItem(cookieNames.TOKENS);

      // Get code and state from the URL after login
      const { error, code, state, errorDescription } = wixClient.auth.parseFromUrl();
      if (error) {
        navigate('/');
        throw new Error(errorDescription);
      }

      // Fetch tokens using code and state
      const memberTokens = await wixClient.auth.getMemberTokens(code, state, oauthData);

      // Set tokens on wixClient
      wixClient.auth.setTokens(memberTokens);
      Cookies.set(cookieNames.TOKENS, JSON.stringify(memberTokens));

      // Refetch loggedin user's cart
      queryClient.invalidateQueries([queryKeys.getCart]);

      // Redirect to the page on which login was initiated
      const originalUrl = new URL(oauthData.originalUri);
      navigate(originalUrl.pathname);
    })();
  }, [queryClient]);

  return (
    <Section>
      <RingLoader />
    </Section>
  );
};

export default LoginCallbackPage;
