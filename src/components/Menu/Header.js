import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Text, Flex, Center, Spacer } from '@chakra-ui/react';
import { MdPets } from 'react-icons/md';

import DrawerMenu from './DrawerMenu';
import YourPets from './YourPets';
import User from './User';

const Header = () => {
  return (
    <Flex
      px={1}
      py={5}
      boxShadow="base"
      align="center"
      pos="sticky"
      top="0"
      bg="white"
      zIndex="dropdown"
    >
      <Center>
        <DrawerMenu />
      </Center>
      <Center>
        <Link to="/home">
          <Flex align="center">
            <MdPets size={24} />
            <Text ml={1} fontSize={24}>
              PetCord
            </Text>
          </Flex>
        </Link>
      </Center>
      <Spacer />
      <Center>
        <Flex align="center">
          <YourPets />
          <User />
        </Flex>
      </Center>
    </Flex>
  );
};

export default memo(Header);
