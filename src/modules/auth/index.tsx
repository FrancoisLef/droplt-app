import decode from 'jwt-decode';
import React, { useState } from 'react';

interface AuthUser {
  userId: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  signin: (token: string) => Promise<void>;
  signout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signin = async (jwt: string) => {
    const { userId, firstName, lastName } = decode<AuthUser>(jwt);
    setToken(jwt);
    setUser({ userId, firstName, lastName });
  };

  const signout = async () => {
    await fetch('/api/signout');
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
