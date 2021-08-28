import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

const User = () => {
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton
        mx={3}
        as={Button}
        borderRadius="full"
        boxSize="50px"
        bgImage={`url(${user.avatar})`}
        bgPosition="center"
        bgSize="contain"
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
      />
      <MenuList>
        <Text ml={3} fontSize={20} fontWeight="bolder">
          {user.name}
        </Text>
        <Text ml={3} fontSize={16} fontWeight="lighter">
          {user.email}
        </Text>
        <MenuDivider />
        <MenuGroup>
          <MenuItem as={Link} to="/user">
            My Account
          </MenuItem>
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
