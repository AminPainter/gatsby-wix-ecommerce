import Cookies from 'js-cookie';
import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, collections } from '@wix/stores';
import { currentCart, backInStockNotifications } from '@wix/ecom';
import { members } from '@wix/members';

import { cookieNames } from 'utils/app-constants';

const wixClient = createClient({
  modules: { collections, products, currentCart, backInStockNotifications, members },
  auth: OAuthStrategy({
    clientId: process.env.GATSBY_WIX_CLIENT_ID,
    tokens: JSON.parse(Cookies.get(cookieNames.TOKENS) || null),
  }),
});

export default wixClient;
