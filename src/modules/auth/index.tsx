import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';

interface AuthUser {
  userId: string;
  firstName: string;
  lastName: string;
}

interface AuthToken {
  userId: string;
  firstName: string;
  lastName: string;
  exp: number;
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

  const signin = async (authToken: string) => {
    const decoded = jwtDecode<AuthToken>(authToken);
    setToken(authToken);
    setUser({
      userId: decoded.userId,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
    });
  };

  const signout = async () => {
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
