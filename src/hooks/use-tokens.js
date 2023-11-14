import { useEffect } from 'react';
import Cookies from 'js-cookie';

import wixClient from 'config/wix';
import { cookieNames } from 'utils/app-constants';

const useTokens = () => {
  useEffect(() => {
    (async () => {
      const tokens = await wixClient.auth.generateVisitorTokens(
        JSON.parse(Cookies.get(cookieNames.TOKENS) || null)
      );
      Cookies.set(cookieNames.TOKENS, JSON.stringify(tokens));
      wixClient.auth.setTokens(tokens);
    })();
  }, []);
};

export default useTokens;
