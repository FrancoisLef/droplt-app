import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedLayout from './layouts/ProtectedLayout';
import { AuthProvider } from './modules/auth';
import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/" element={<ProtectedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
