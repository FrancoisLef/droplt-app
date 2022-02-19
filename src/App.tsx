import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import client from './graphql';
import {
  AuthProvider,
  ProtectedRouteGuard,
  PublicRouteGuard,
} from './helpers/auth';
import ProtectedLayout from './layouts/Protected';
import PublicLayout from './layouts/Public';
import ForgotPasswordPage from './pages/ForgotPassword';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Routes>
            <Route element={<PublicRouteGuard />}>
              <Route element={<PublicLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                />
              </Route>
            </Route>
            <Route element={<ProtectedRouteGuard />}>
              <Route element={<ProtectedLayout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
