import { Fragment, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from './PrivateRoute';
import Loading from '../components/layouts/Loading';
import Header from '../components/Menu/Header';

import Lost from '../pages/Lost';
const Login = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/HomePage'));
const PetsPage = lazy(() => import('../pages/PetsPage'));
const PetsInfoPage = lazy(() => import('../pages/PetsInfoPage'));
const Healths = lazy(() => import('../pages/Healths'));
const Health = lazy(() => import('../pages/Health'));
const User = lazy(() => import('../pages/User'));

const Index = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();

  return (
    <Fragment>
      {isLoggedIn && <Header />}
      <Suspense fallback={<Loading />}>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname}>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" component={Login} key="login" />
            <PrivateRoute path="/home" component={HomePage} key="home" />
            <PrivateRoute
              path="/pets/:petId"
              component={PetsInfoPage}
              key="pet"
            />
            <PrivateRoute path="/pets" component={PetsPage} key="pets" />
            <PrivateRoute
              path="/healths/:petId"
              component={Health}
              key="health"
            />
            <PrivateRoute path="/healths" component={Healths} key="healths" />
            <PrivateRoute path="/user" component={User} key="login" />
            <Route path="*" component={Lost} />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </Fragment>
  );
};

export default Index;
