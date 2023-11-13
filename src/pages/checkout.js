import React from 'react';

import { Grid, Section } from 'ui';
import { CheckoutForm, CheckoutOrderSummary } from 'components/checkout-page';
import SiteSeo from 'components/seo';

const CheckoutPage = () => (
  <Section>
    <Grid columns={[1.5, 1]} gap={10}>
      <CheckoutForm />
      <CheckoutOrderSummary />
    </Grid>
  </Section>
);

export default CheckoutPage;

export const Head = () => <SiteSeo title='Checkout' />;
