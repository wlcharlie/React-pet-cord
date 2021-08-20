import {
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';

const User = () => {
  return (
    <Menu>
      <MenuButton
        mx={3}
        as={Button}
        borderRadius="full"
        boxSize="50px"
        bgImage="url(https://bit.ly/sage-adebayo)"
        bgPosition="center"
        bgSize="contain"
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
      />
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <Flex justify="flex-end">
            <Button colorScheme="red" variant="solid" mr={3}>
              Logout
            </Button>
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default User;
