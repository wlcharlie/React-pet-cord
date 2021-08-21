import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, path }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Route
      path={path}
      render={() => (isLoggedIn ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
