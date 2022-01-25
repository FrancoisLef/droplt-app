import {
  Auth,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import app from '../firebase';

interface AuthContextType {
  auth: Auth;
  currentUser: User | null;
  resetPassword: (email: string) => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

interface LocationStateFrom {
  pathname: string;
  state?: {
    from?: {
      pathname?: string;
    };
  };
}

// We need to assert the non-null value (null!) as a default value
// Because this context is filled by the AuthProvider (and only by itself)
const AuthContext = React.createContext<AuthContextType>(null!);

// Expose auth hook
export const useAuth = () => useContext(AuthContext);

// Expose auth provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const resetPassword = (email: string) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log('Auth State Changed', user);
      setCurrentUser(user);
      setLoading(false);
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        auth,
        login,
        logout,
        resetPassword,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

/**
 * This route layout prevent users to access protected routes when not connected.
 */
export const ProtectedRoutes = (): JSX.Element => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they sign in, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

/**
 * This route layout prevent users to access public pages (login) while being connected.
 */
export const PublicRoutes = (): JSX.Element => {
  const { currentUser } = useAuth();
  const location = useLocation() as LocationStateFrom;

  if (currentUser && location.pathname === '/login') {
    return <Navigate to={location?.state?.from?.pathname || '/'} replace />;
  }

  return <Outlet />;
};
