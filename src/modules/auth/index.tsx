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

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  signin: (credentials?: Credentials) => Promise<void>;
  signout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signin = async (credentials?: Credentials) => {
    let response;
    if (credentials) {
      response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      response = await fetch('/api/refresh');
    }

    const result = await response.json();
    const decoded = jwtDecode<AuthToken>(result.token);
    setToken(result.token);
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
