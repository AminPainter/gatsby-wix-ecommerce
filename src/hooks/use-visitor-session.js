import { useEffect } from 'react';
import Cookies from 'js-cookie';

import wixClient from 'config/wix';
import { cookieNames } from 'utils/app-constants';

const useVisitorSession = () => {
  useEffect(() => {
    (async () => {
      const tokens = await wixClient.auth.generateVisitorTokens(
        JSON.parse(Cookies.get(cookieNames.VISITOR) || null)
      );
      Cookies.set(cookieNames.VISITOR, JSON.stringify(tokens));
      wixClient.auth.setTokens(tokens);
    })();
  }, []);
};

export default useVisitorSession;
