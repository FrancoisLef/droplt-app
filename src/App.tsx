import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './modules/auth';
import LoginPage from './pages/Login';
// import ProtectedPage from './pages/Protected';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/protected" element={<ProtectedPage />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
