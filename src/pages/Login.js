import LoginMenu from '../components/Login/LoginMenu';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { Redirect } from 'react-router';

const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Fragment>
      {isLoggedIn && <Redirect to="/home" />}
      <LoginMenu />
    </Fragment>
  );
};

export default Login;
