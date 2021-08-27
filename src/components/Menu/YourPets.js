import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPets } from '../../api/pets';
import { petsActions } from '../../store/pets';

let init = true;

const Pets = () => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets);
  const UserId = useSelector(state => state.auth.id);

  useEffect(() => {
    if (init) {
      const initPet = async () => {
        const res = await getPets(UserId);
        dispatch(petsActions.update(res.data));
      };
      init = false;
      initPet();
    }
  }, []);

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
        src={
          e.avatar === 'undefined'
            ? 'https://image.flaticon.com/icons/png/512/4388/4388652.png'
            : e.avatar
        }
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

export default YourPets;
