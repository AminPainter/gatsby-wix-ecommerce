import React from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import Layout from 'components/layout';
import { theme } from 'ui';
import { handleApi } from 'utils/api-handler';
import { useTokens } from 'hooks';
import 'styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      onError: handleApi,
    },
  },
});

const AppContext = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
);

const App = ({ children }) => {
  useTokens();

  return (
    <Layout>
      {children}
      <SnackbarProvider />
    </Layout>
  );
};

export { AppContext };
export default App;
