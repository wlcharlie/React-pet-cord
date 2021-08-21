import { Route, Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const NoFoundRoute = () => {
  return (
    <Route path="/:noFound">
      <p>
        No page found!
        <Link color="teal.500" as={ReachLink} to="/">
          Take me back!
        </Link>
      </p>
    </Route>
  );
};

export default NoFoundRoute;
