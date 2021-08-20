import React from 'react';
import { ChakraProvider, theme, Grid, Box } from '@chakra-ui/react';

import Index from './router/Index';
import Header from './components/Menu/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Index />
    </ChakraProvider>
  );
}

export default App;
