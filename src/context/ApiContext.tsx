import React, { createContext, useCallback } from 'react';
import api from '../services/apiCliente';

interface LoginCredencial {
  email: string;
  password: string;
}

type AuthContextI = {
  firstName: string;
  loginApi(credencial: LoginCredencial): Promise<void>;
};

const AuthContext = createContext<AuthContextI>({} as AuthContextI);

function AuthProvider({ children }: any) {
  const loginApi = useCallback(async ({ email, password }) => {
    const response = await api.post('/oauth/token', {
      email,
      password,
    });
    console.log('Response :>> ', response);
  }, []);

  return (
    <AuthContext.Provider value={{ firstName: 'márcio', loginApi }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
