import React from 'react';

import wixClient from 'config/wix';

const LoginPage = () => {
  async function handleLogin() {
    const data = wixClient.auth.generateOAuthData(
      `${window.location.origin}/login-callback`,
      window.location.href
    );
    const { authUrl } = await wixClient.auth.getAuthUrl(data);
    window.location = authUrl;
  }

  return <button onClick={handleLogin}>Click me</button>;
};

export default LoginPage;
