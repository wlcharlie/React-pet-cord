import { Fragment, lazy, Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loading from '../components/layouts/Loading';
import Header from '../components/Menu/Header';
import { useSelector } from 'react-redux';

const Login = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Pets = lazy(() => import('../pages/Pets'));
const EditPets = lazy(() => import('../pages/EditPets'));
const Healths = lazy(() => import('../pages/Healths'));
const Health = lazy(() => import('../pages/Health'));
const User = lazy(() => import('../pages/User'));

const Index = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Fragment>
      {isLoggedIn && <Header />}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/pets/:petId" component={EditPets} />
          <PrivateRoute path="/pets" component={Pets} />
          <PrivateRoute path="/healths/:petId" component={Health} />
          <PrivateRoute path="/healths" component={Healths} />
          <PrivateRoute path="/user" component={User} />

          <Route path="*">
            <div>why are you here?</div>
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Index;
