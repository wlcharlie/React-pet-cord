import { Fragment, lazy, Suspense } from 'react';

import { Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loading from '../components/layouts/Loading';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/home'));
const Pets = lazy(() => import('../pages/Pets'));
const Records = lazy(() => import('../pages/Records'));

const Index = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/pets" component={Pets} />
        <PrivateRoute path="/records" component={Records} />
      </Suspense>
    </Fragment>
  );
};

export default Index;
