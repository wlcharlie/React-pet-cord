import { Fragment, lazy, Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loading from '../components/layouts/Loading';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/home'));
const Pets = lazy(() => import('../pages/Pets'));
const EditPets = lazy(() => import('../pages/EditPets'));
const Records = lazy(() => import('../pages/Records'));

const Index = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/pets/:petId" component={EditPets} />
          <PrivateRoute path="/pets" component={Pets} />
          <PrivateRoute path="/records" component={Records} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Index;
