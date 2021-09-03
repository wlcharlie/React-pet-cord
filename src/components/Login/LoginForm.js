import {
  Input,
  Text,
  FormControl,
  FormLabel,
  Tooltip,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LoginForm = props => {
  const { loginEmail, loginPassword } = props.loginData;
  return (
    <Flex
      as={motion.div}
      initial={{ transform: 'translateY(-100%)', opacity: 0 }}
      animate={{ transform: 'translateY(0%)', opacity: 1 }}
      exit={{ transform: 'translateY(-100%)', opacity: 0 }}
      h="100%"
      direction="column"
      justify="center"
    >
      <Text mb={3} fontSize={24} fontWeight="bolder">
        LOGIN
      </Text>
      <FormControl id="email" mb={2}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" isRequired ref={loginEmail} />
      </FormControl>
      <FormControl id="password" mb={2}>
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
        onClick={props.dispatchForm}
        textAlign="right"
        _hover={{ cursor: 'pointer', fontWeight: 'bolder' }}
      >
        Not Registered yet?
      </Text>
    </Flex>
  );
};

export default LoginForm;
