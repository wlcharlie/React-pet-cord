import { Fragment, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';

import { registerAPI, loginAPI } from '../../api/auth';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginDrawer = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState('login');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginData = { loginEmail: useRef(), loginPassword: useRef() };
  const regData = {
    regUsername: useRef(),
    regEmail: useRef(),
    regPassword: useRef(),
    regPasswordCheck: useRef(),
  };

  const formChangeHandler = () => {
    form === 'login' ? setForm('register') : setForm('login');
  };

  const submitHandler = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (form === 'login') {
      const { loginEmail, loginPassword } = loginData;
      const email = loginEmail.current.value;
      const password = loginPassword.current.value;
      const res = await loginAPI({ email, password });
      if (!res.ok) {
        setError(res.error.message);
        setLoading(false);
        return;
      }
      const data = await res.json();
      dispatch(authActions.login({ token: data.idToken }));
    }

    if (form === 'register') {
      const { regUsername, regEmail, regPassword, regPasswordCheck } = regData;
      const username = regUsername.current.value;
      const email = regEmail.current.value;
      const password = regPassword.current.value;
      const passwordCheck = regPasswordCheck.current.value;
      const res = await registerAPI({ email, password });

      if (!res.ok) {
        setError(res.error.message);
        setLoading(false);
        return;
      }
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Drawer isOpen={true} placement="right" size="md">
        <form onSubmit={submitHandler}>
          <DrawerContent
            background={['rgba(255,255,255,0.95)', null, null, 'white']}
          >
            <DrawerHeader textAlign="center">PetCord</DrawerHeader>

            {form === 'login' && (
              <LoginForm
                formChangeHandler={formChangeHandler}
                loginData={loginData}
              />
            )}
            {form === 'register' && (
              <RegisterForm
                formChangeHandler={formChangeHandler}
                regData={regData}
              />
            )}
            <DrawerFooter flexDirection="column" h="20%">
              {error && (
                <Alert status="warning" mb={2}>
                  <AlertIcon />
                  {error}
                  <CloseButton
                    size="sm"
                    position="absolute"
                    right="3px"
                    top="3px"
                    autoFocus
                    onBlur={() => setError(null)}
                    onClick={() => setError(null)}
                  />
                </Alert>
              )}
              <Button
                isLoading={loading}
                type="submit"
                w="100%"
                colorScheme="red"
              >
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
