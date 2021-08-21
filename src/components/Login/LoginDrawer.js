import { Fragment, useState } from 'react';
import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  Button,
} from '@chakra-ui/react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginDrawer = () => {
  const [form, setForm] = useState('login');

  const formChangeHandler = () => {
    form === 'login' ? setForm('register') : setForm('login');
  };

  return (
    <Fragment>
      <Drawer isOpen={true} placement="right" size="md">
        <form action="/" method="post">
          <DrawerContent
            background={['rgba(255,255,255,0.95)', null, null, 'white']}
          >
            <DrawerHeader textAlign="center">PetCord</DrawerHeader>

            {form === 'login' && (
              <LoginForm formChangeHandler={formChangeHandler} />
            )}
            {form === 'register' && (
              <RegisterForm formChangeHandler={formChangeHandler} />
            )}
            <DrawerFooter>
              <Button type="submit" w="100%" colorScheme="red">
                {form === 'login' ? 'LOGIN' : 'JOIN'}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </Fragment>
  );
};

export default LoginDrawer;
