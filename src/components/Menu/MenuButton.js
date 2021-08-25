import { Button } from '@chakra-ui/react';
import { MdPets, MdHome, MdFavorite } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const MenuButton = props => {
  const styles = {
    home: <MdHome size={20} />,
    pets: <MdPets size={20} />,
    healths: <MdFavorite size={20} />,
  };

  return (
    <Button
      as={NavLink}
      to={`/${props.styles}`}
      leftIcon={styles[props.styles]}
      size="lg"
      justifyContent="start"
      bg="transparent"
      px={2}
      mb={2}
      _hover={{ bg: '#fea42a', color: 'white' }}
      activeStyle={{ backgroundColor: '#fea42a', color: 'white' }}
    >
      {props.children}
    </Button>
  );
};

export default MenuButton;
