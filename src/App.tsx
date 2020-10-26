import React from 'react';
import Login from './page/Login/Login';
import { BrowserRouter } from 'react-router-dom';

import GloboStyle from './styles/global';

import { AuthProvider } from './context/ApiContext';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GloboStyle />
    </BrowserRouter>
  );
}

export default App;
