import React, { useState, createContext, useCallback } from 'react';
import { api } from '../services/apiCliente';

interface AuthLoginState {
  token: string;
  user: string;
}

interface LoginCredencial {
  email: string;
  password: string;
}

type AuthContextI = {
  user: object;
  loginApi(credencial: LoginCredencial): Promise<void>;
  logoutApi(): void;
};

const AuthContext = createContext<AuthContextI>({} as AuthContextI);

function AuthProvider({ children }: any) {
  const [userLogin, setUserLogin] = useState<AuthLoginState>(() => {
    const token = localStorage.getItem('@api-ajax:token');
    const user = localStorage.getItem('@api-ajax:user');
    if (token && user) {
      return { token, user };
    }
    return {} as AuthLoginState;
  });
  const loginApi = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth', {
      email,
      password,
    });
    const { token } = response.data;
    const user = JSON.parse(response.config.data);
    localStorage.setItem('@api-ajax:token', token);
    localStorage.setItem('@api-ajax:user', JSON.stringify(user));
    console.log('UserLogin >>> ' + user.email);
    console.log('UserLogin >>> ' + typeof user);

    setUserLogin({ token, user });
  }, []);

  const logoutApi = useCallback(() => {
    localStorage.removeItem('@api-ajax:token');
    localStorage.removeItem('@api-ajax:user');
    setUserLogin({} as AuthLoginState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userLogin, loginApi, logoutApi }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
