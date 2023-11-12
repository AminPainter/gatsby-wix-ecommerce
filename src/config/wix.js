import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, collections } from '@wix/stores';
import { currentCart } from '@wix/ecom';

const wixClient = createClient({
  modules: { collections, products, currentCart },
  auth: OAuthStrategy({ clientId: process.env.GATSBY_WIX_CLIENT_ID }),
});

export default wixClient;
