import { Link } from '@chakra-ui/react';
import {
  Switch as RouteSwitch,
  useLocation,
  Route,
  Redirect,
  Link as ReachLink,
} from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  return (
    <RouteSwitch>
      <Route path="/records">
        <p>here you are at records? {location.pathname}</p>
      </Route>
      <Route path="/pets">
        <p>here you are at pets? {location.pathname}</p>
      </Route>
      <Route path="/login">
        <p>here you are at login? {location.pathname}</p>
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
  );
};

export default Index;
