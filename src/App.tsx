import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoutes from './layouts/ProtectedRoutes';
import { AuthProvider, AuthSession } from './modules/auth';
import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
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
                <Route index element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
              </Route>
            </Routes>
          </AuthSession>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
