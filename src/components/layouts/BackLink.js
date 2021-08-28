import { Link, useHistory } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';

const BackLink = () => {
  const history = useHistory();
  return (
    <Link onClick={history.goBack}>
      <Button variant="ghost" leftIcon={<RiArrowGoBackLine />}>
        GO BACK
      </Button>
    </Link>
  );
};

export default BackLink;
