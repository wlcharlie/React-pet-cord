import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Pets = () => {
  const pets = useSelector(state => state.pets);

  return pets.map(e => (
    <MenuItem
      as={NavLink}
      to={`/pets/${e._id}`}
      activeStyle={{ display: 'none' }}
      minH="40px"
      key={e._id}
    >
      <Image
        boxSize="2rem"
        borderRadius="full"
        src={e.avatar}
        alt={e.name}
        mr="12px"
      />
      <span>{e.name}</span>
    </MenuItem>
  ));
};

const YourPets = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        d={['none', 'block']}
      >
        Your Pets
      </MenuButton>
      <MenuList>
        <Pets />
      </MenuList>
    </Menu>
  );
};

export default React.memo(YourPets);
