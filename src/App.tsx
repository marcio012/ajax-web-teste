import React from 'react';
import Login from './page/Login/Login';

import Tolst from './components/Tolst/Tolst';

import GloboStyle from './styles/global';

import { AuthProvider } from './context/ApiContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
      <Tolst />
      <GloboStyle />
    </>
  );
}

export default App;
