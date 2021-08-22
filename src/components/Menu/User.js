import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

const User = () => {
  const dispatch = useDispatch();

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
            <Button
              colorScheme="red"
              variant="solid"
              mr={3}
              onClick={() => {
                dispatch(authActions.logout());
              }}
            >
              Logout
            </Button>
          </Flex>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default User;
