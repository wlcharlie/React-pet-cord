import { Fragment, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import {
  Switch as RouteSwitch,
  useLocation,
  Route,
  Redirect,
} from 'react-router-dom';
import Loading from '../components/layouts/Loading';
import NoFoundRoute from './NoFoundRoute';

const Header = lazy(() => import('../components/Menu/Header'));
const Pets = lazy(() => import('../pages/Pets'));
const Login = lazy(() => import('../pages/Login'));

const Index = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        {isLoggedIn && <Header />}
        {isLoggedIn && (
          <RouteSwitch>
            <Route path="/records">
              <p>here you are at records? {location.pathname}</p>
            </Route>
            <Route path="/pets">
              <Pets />
            </Route>
            <NoFoundRoute />
          </RouteSwitch>
        )}
        <Route path="/login">
          {isLoggedIn && <Redirect push to="/pets" />}
          <Login />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Suspense>
    </Fragment>
  );
};

export default Index;
