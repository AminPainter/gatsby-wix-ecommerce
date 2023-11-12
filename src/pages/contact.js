import React from 'react';

import { GetInTouch, Map } from 'components/contact-page';
import SiteSeo from 'components/seo';

const ContactPage = () => (
  <>
    <GetInTouch />
    <Map />
  </>
);

export default ContactPage;

export const Head = () => <SiteSeo title='Contact Us' />;
