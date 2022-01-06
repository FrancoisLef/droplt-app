import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthUser {
  userId: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  refresh: () => Promise<void>;
  signin: (token: string) => Promise<void>;
  signout: () => Promise<void>;
}

export let inMemoryToken: string = '';

const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const signin = async (jwt: string) => {
    if (!jwt) {
      return;
    }

    const { userId, firstName, lastName } = decode<AuthUser>(jwt);
    setUser({ userId, firstName, lastName });
    setToken(jwt);
    inMemoryToken = jwt;
  };

  const signout = async () => {
    await fetch('/api/signout');
    setUser(null);
    setToken('');
    inMemoryToken = '';
  };

  const refresh = async () => {
    const { token } = await fetch('/api/refresh')
      .then((res) => res.json())
      .catch(() => {});
    await signin(token);
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, refresh, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthSession = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { refresh, user } = useAuth();

  useEffect(() => {
    // User is authenticated, do nothing
    if (user) {
      return;
    }

    setIsLoading(true);
    refresh().finally(() => setIsLoading(false));
  }, [refresh, setIsLoading, user]);

  if (isLoading) {
    return null;
  }

  if (user && location.pathname === '/signin') {
    return <Navigate to="/" replace />;
  }

  return children;
};
