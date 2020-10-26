import React, { createContext, useCallback } from 'react';

type AuthContextI = {
  firstName: string;
  loginApi(): void;
};

const AuthContext = createContext<AuthContextI>({} as AuthContextI);

function AuthProvider({ children }: any) {
  const loginApi = useCallback(() => {
    console.log('singIn :>> ');
  }, []);
  return (
    <AuthContext.Provider value={{ firstName: 'márcio', loginApi }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
