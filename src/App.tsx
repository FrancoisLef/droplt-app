import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import ProtectedRoutes from './layouts/ProtectedRoutes';
import { AuthProvider, AuthSession } from './modules/auth';
import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
import UsersPage from './pages/Users';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <AuthSession>
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
          </AuthSession>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
