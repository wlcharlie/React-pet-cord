import { Fragment } from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import LoginPage from '../components/Login/LoginPage';

const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Fragment>
      {isLoggedIn && <Redirect to="/home" />}
      <LoginPage />
    </Fragment>
  );
};

export default Login;
