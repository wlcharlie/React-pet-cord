import { Text, Flex, Center, Spacer } from '@chakra-ui/react';
import { MdPets } from 'react-icons/md';

import DrawerMenu from './DrawerMenu';
import YourPets from './YourPets';
import User from './User';

const Header = () => {
  return (
    <Flex
      p={1}
      boxShadow="base"
      align="center"
      pos="sticky"
      top="0"
      bg="white"
      zIndex="dropdown"
      h="7%"
    >
      <Center>
        <DrawerMenu />
      </Center>
      <Center>
        <Flex align="center">
          <MdPets size={24} />
          <Text ml={1} fontSize={24}>
            PetCord
          </Text>
        </Flex>
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

export default Header;
