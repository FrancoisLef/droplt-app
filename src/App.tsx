// import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider, ProtectedRoutes, PublicRoutes } from './helpers/auth';
// import client from './graphql';
// import AppLayout from './layouts/AppLayout';
// import ProtectedRoutes from './layouts/ProtectedRoutes';
// import { AuthProvider, AuthSession } from './modules/auth';
// import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProtectedPage from './pages/Protected';
// import UsersPage from './pages/Users';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<ProtectedPage />} />
            </Route>
          </Routes>
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
