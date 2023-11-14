import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';

import wixClient from 'config/wix';
import { Section } from 'ui';
import { cookieNames } from 'utils/app-constants';
import apiHandler from 'utils/api-handler';
import { RingLoader } from 'components/loaders';

const LoginCallbackPage = () => {
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

      // Redirect to the page on which login was initiated
      navigate(oauthData.originalUri);
    })();
  }, []);

  return (
    <Section>
      <RingLoader />
    </Section>
  );
};

export default LoginCallbackPage;
