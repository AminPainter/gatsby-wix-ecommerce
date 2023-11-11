import React from 'react';

import App, { AppContext } from 'components/app';

export const wrapRootElement = ({ element }) => <AppContext>{element}</AppContext>;

export const wrapPageElement = ({ element }) => <App>{element}</App>;
