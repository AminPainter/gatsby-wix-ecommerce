import React from 'react';

import Navigation from './navigation';
import Footer from './footer';
import Cart from 'components/cart';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <main>{children}</main>
    <Cart />
    <Footer />
  </div>
);

export default Layout;
