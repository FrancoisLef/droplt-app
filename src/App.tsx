import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedLayout from './components/Layout/Protected';
import PublicLayout from './components/Layout/Public';
import client from './graphql';
import {
  AuthProvider,
  ProtectedRouteGuard,
  PublicRouteGuard,
} from './helpers/auth';
import ForgotPasswordPage from './pages/ForgotPassword';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
};

export default App;
