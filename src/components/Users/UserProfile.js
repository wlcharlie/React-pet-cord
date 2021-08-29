import {
  Box,
  Grid,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Divider,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import useFormEvent from '../../hooks/useFormEvent';
import { FaCamera } from 'react-icons/fa';
import { updateUserInfo, updatePassword } from '../../api/user';
import { AlertError } from '../layouts/Alert';
import BackLink from '../layouts/BackLink';

const defaultAvatar =
  'https://image.flaticon.com/icons/png/512/1596/1596810.png';

const UserProfile = () => {
  const { avatar, email, name, password, id, token } = useSelector(
    state => state.auth
  );
  const [user, setUser] = useState({ avatar, email, name, password });
  const [previewAvatar, setPreviewAvatar] = useState(avatar);
  const avatarRef = useRef();
  const refresh = () => {};
  const onClose = () => {};

  const { eventHandler, leaveConfirm, loading, error, setError } = useFormEvent(
    {
      refresh,
      onClose,
    }
  );

  const imagePreview = e => {
    if (!e.target.files.length) return;
    setPreviewAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const editHandler = e => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const updateUser = async e => {
    e.preventDefault();
    eventHandler.pending();

    if (user.password) {
      const { res, data } = await updatePassword({
        idToken: token,
        password: user.password,
      });

      if (!res.ok) {
        eventHandler.fail();
        return setError(data.error);
      }
    }
    const { res } = await updateUserInfo({
      id,
      name: user.name,
      avatar: avatarRef.current.files[0] || avatar,
    });
    if (!res.ok) {
      eventHandler.fail();
      return setError(true);
    }
    eventHandler.success();
  };

  return (
    <form onSubmit={updateUser} onChange={eventHandler.typing}>
      <BackLink />

      <Box
        m={5}
        px={1}
        h="600px"
        bg="white"
        borderRadius="1rem"
        boxShadow="base"
      >
        <Text pt={5} ml={5} fontSize="28px">
          User Information
        </Text>
        {error && <AlertError error={error} />}
        {user.name.includes('example') && (
          <AlertError
            error={{ message: 'Sorry, the example account is READONLY.' }}
          />
        )}

        <Divider />
        <Grid w="100%" h="90%" px={3} templateColumns={['1fr', '1fr 1fr']}>
          <Flex w="100%" h="100%" align="center" justify="center">
            <Box w="100px" h="100px" pos="relative">
              <Image
                pos="absolute"
                zIndex="99"
                bgSize="cover"
                bgImage={`url(${previewAvatar || defaultAvatar})`}
                w="100%"
                h="100%"
                borderRadius="50%"
                transition="0.2s"
                _hover={{
                  filter: 'blur(2px) brightness(50%)',
                  cursor: 'pointer',
                  zIndex: '97',
                }}
                onClick={() => avatarRef.current.click()}
              />
              <Box
                color="rgba(255,255,255,0.6)"
                zIndex="98"
                pos="absolute"
                top="50%"
                left="50%"
                mt="-10px"
                ml="-10px"
              >
                <FaCamera size={20} />
              </Box>
            </Box>
            <Input
              accept="image/*"
              type="file"
              name="avatar"
              d="none"
              onChange={imagePreview}
              ref={avatarRef}
            />
          </Flex>
          <Flex direction="column" my="auto">
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={user.email}
                variant="unstyled"
                isReadOnly
              />
            </FormControl>
            <FormControl my={3} id="username" isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                type="name"
                name="name"
                value={user.name}
                onChange={user.name.includes('example') ? null : editHandler}
                isDisabled={user.name.includes('example')}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={user.password}
                onChange={user.name.includes('example') ? null : editHandler}
                isDisabled={user.name.includes('example')}
              />
              <FormHelperText>
                Remember to save if you want to change the info
              </FormHelperText>
            </FormControl>
            <Box mt="2rem" textAlign="right">
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                isLoading={loading}
                isDisabled={user.name.includes('example')}
              >
                Save
              </Button>
              <Button colorScheme="teal" onClick={leaveConfirm}>
                Cancel
              </Button>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </form>
  );
};

export default UserProfile;
