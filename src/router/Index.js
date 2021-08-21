import { Fragment, lazy, Suspense } from 'react';
import { Link } from '@chakra-ui/react';
import {
  Switch as RouteSwitch,
  useLocation,
  Route,
  Redirect,
  Link as ReachLink,
} from 'react-router-dom';
import Loading from '../components/layouts/Loading';

const Header = lazy(() => import('../components/Menu/Header'));
const Pets = lazy(() => import('../pages/Pets'));
const Login = lazy(() => import('../pages/Login'));

const Index = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        {/* <Header /> */}
        <RouteSwitch>
          <Route path="/records">
            <p>here you are at records? {location.pathname}</p>
          </Route>
          <Route path="/pets">
            <Pets />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:noFound">
            <p>
              No page found!
              <Link color="teal.500" as={ReachLink} to="/">
                Take me back!
              </Link>
            </p>
          </Route>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
        </RouteSwitch>
      </Suspense>
    </Fragment>
  );
};

export default Index;
