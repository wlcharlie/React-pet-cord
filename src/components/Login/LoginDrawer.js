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
import { Fragment, useState, useRef, useReducer } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import { registerAPI, loginAPI } from '../../api/auth';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import useFormEvent from '../../hooks/useFormEvent';

const formChangeHandler = (state, action) => {
  return state === 'login' ? 'register' : 'login';
};

const LoginDrawer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, dispatchForm] = useReducer(formChangeHandler, 'login');
  const { eventHandler, leaveConfirm, loading, error, setError } = useFormEvent(
    { refresh: () => {}, onClose: () => {} }
  );

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const loginData = { loginEmail: useRef(), loginPassword: useRef() };
  const regData = {
    regUsername: useRef(),
    regEmail: useRef(),
    regPassword: useRef(),
    regPasswordCheck: useRef(),
  };

  const submitHandler = async e => {
    e.preventDefault();
    eventHandler.pending();

    if (form === 'login') {
      const { loginEmail, loginPassword } = loginData;
      const email = loginEmail.current.value;
      const password = loginPassword.current.value;
      const { res, data, user } = await loginAPI({ email, password });
      if (!res.ok || !res) {
        eventHandler.fail(data.error.message);
        return;
      }
      dispatch(authActions.login({ token: data.idToken, ...user }));
    }

    if (form === 'register') {
      const { regUsername, regEmail, regPassword, regPasswordCheck } = regData;
      const username = regUsername.current.value;
      const email = regEmail.current.value;
      const password = regPassword.current.value;
      const passwordCheck = regPasswordCheck.current.value;
      if (passwordCheck !== password) {
        eventHandler.fail('Both password fields are not identical');
        return;
      }

      const { res, data, user } = await registerAPI({
        email,
        password,
        username,
      });

      if (!res.ok) {
        eventHandler.fail(data.error.message);
        return;
      }
      dispatch(authActions.login({ token: data.idToken, ...user }));
    }
    eventHandler.success('Welcome Back!');
    history.replace('/home');
  };

  return (
    <Fragment>
      <Drawer isOpen={true} placement="right" size="md">
        <form onSubmit={submitHandler}>
          <DrawerContent background={['rgba(255,255,255,0.95)', null, 'white']}>
            <DrawerHeader textAlign="center">PetCord</DrawerHeader>

            {form === 'login' && (
              <LoginForm dispatchForm={dispatchForm} loginData={loginData} />
            )}
            {form === 'register' && (
              <RegisterForm dispatchForm={dispatchForm} regData={regData} />
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
                loadingText="just a sec..."
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
