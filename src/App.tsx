import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import AppLayout from './layouts/AppLayout';
// import ProtectedRoutes from './layouts/ProtectedRoutes';
// import { AuthProvider, AuthSession } from './modules/auth';
// import HomePage from './pages/Home';
import ProtectedLayout from './components/Layout/Protected';
import PublicLayout from './components/Layout/Public';
import client from './graphql';
import {
  AuthProvider,
  ProtectedRouteGuard,
  PublicRouteGuard,
} from './helpers/auth';
import ForgotPasswordPage from './pages/ForgotPassword';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import ProtectedPage from './pages/Protected';
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
                  <Route index element={<ProtectedPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </ApolloProvider>
        </AuthProvider>
        {/* <AuthProvider>
          <AuthSession>
            <ApolloProvider client={client}>
              <Routes>
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/" element={<ProtectedRoutes />}>
                  <Route element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="*" element={<HomePage />} />
                  </Route>
                </Route>
              </Routes>
            </ApolloProvider>
          </AuthSession>
        </AuthProvider> */}
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
