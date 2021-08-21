import { Fragment } from 'react';
import { Link } from '@chakra-ui/react';
import {
  Switch as RouteSwitch,
  useLocation,
  Route,
  Redirect,
  Link as ReachLink,
} from 'react-router-dom';

import Header from '../components/Menu/Header';
import Pets from '../pages/Pets';
import Login from '../pages/Login';

const Index = () => {
  const location = useLocation();

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Index;
