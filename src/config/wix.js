import Cookies from 'js-cookie';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, collections } from '@wix/stores';
import { currentCart } from '@wix/ecom';

import { cookieNames } from 'utils/app-constants';

const wixClient = createClient({
  modules: { collections, products, currentCart },
  auth: OAuthStrategy({
    clientId: process.env.GATSBY_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get(cookieNames.VISITOR)),
  }),
});

export default wixClient;
