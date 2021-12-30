import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/Login';
import theme from './theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ChakraProvider>
  );
};
