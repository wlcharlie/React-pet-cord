import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Index from './router/Index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Index />
    </ChakraProvider>
  );
}

export default App;
