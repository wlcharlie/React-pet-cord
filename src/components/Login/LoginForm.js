import {
  DrawerBody,
  Input,
  Text,
  FormControl,
  FormLabel,
  Tooltip,
  Divider,
  Flex,
} from '@chakra-ui/react';

const LoginForm = props => {
  const { loginEmail, loginPassword } = props.loginData;
  return (
    <DrawerBody>
      <Flex h="100%" direction="column" justify="center">
        <Text mb={3} fontSize={24} fontWeight="bolder">
          LOGIN
        </Text>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" isRequired ref={loginEmail} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" isRequired ref={loginPassword} />
        </FormControl>

        <Divider my={3} />
        <Text textAlign="right" mb={2}>
          <Tooltip
            label="well, the feature still developing"
            aria-label="A tooltip"
          >
            Forgot the Password?
          </Tooltip>
        </Text>
        <Text
          onClick={props.formChangeHandler}
          textAlign="right"
          _hover={{ cursor: 'pointer', fontWeight: 'bolder' }}
        >
          Not Registered yet?
        </Text>
      </Flex>
    </DrawerBody>
  );
};

export default LoginForm;
