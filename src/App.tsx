import React from 'react';
import Login from './page/Login/Login';

import GloboStyle from './styles/global';

import { AuthProvider } from './context/ApiContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
      <GloboStyle />
    </>
  );
}

export default App;
