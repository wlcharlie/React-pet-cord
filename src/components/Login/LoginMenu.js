import { Fragment } from 'react';
import { Box } from '@chakra-ui/react';
import LoginDrawer from './LoginDrawer';

const LoginMenu = () => {
  return (
    <Fragment>
      <LoginDrawer />
      <Box
        w="100%"
        h="100%"
        backgroundPosition={['-200px', null, null, 'left']}
        backgroundSize={['cover', null, null, null, null, '80%']}
        backgroundRepeat="no-repeat"
        backgroundImage="url(https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
      ></Box>
    </Fragment>
  );
};

export default LoginMenu;
