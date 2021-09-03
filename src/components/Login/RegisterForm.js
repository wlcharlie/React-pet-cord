import {
  Input,
  Text,
  FormControl,
  FormLabel,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MdChevronLeft } from 'react-icons/md';

const RegisterForm = props => {
  const { regUsername, regEmail, regPassword, regPasswordCheck } =
    props.regData;

  return (
    <Flex
      as={motion.div}
      initial={{ transform: 'translateY(100%)', opacity: 0 }}
      animate={{ transform: 'translateY(0%)', opacity: 1 }}
      exit={{ transform: 'translateY(100%)', opacity: 0 }}
      h="100%"
      direction="column"
      justify="center"
    >
      <Text mb={3} fontSize={24} fontWeight="bolder">
        Reg
      </Text>
      <FormControl id="username" mb={2}>
        <FormLabel>User Name</FormLabel>
        <Input type="text" isRequired ref={regUsername} />
      </FormControl>
      <FormControl id="email" mb={2}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" isRequired ref={regEmail} />
      </FormControl>
      <FormControl id="password" mb={2}>
        <FormLabel>Password</FormLabel>
        <Input type="password" isRequired ref={regPassword} />
      </FormControl>
      <FormControl id="checkPassword" mb={2}>
        <FormLabel>Check the Password</FormLabel>
        <Input type="password" isRequired ref={regPasswordCheck} />
      </FormControl>

      <Divider my={3} />
      <Text
        onClick={props.dispatchForm}
        _hover={{ cursor: 'pointer', fontWeight: 'bolder' }}
      >
        <MdChevronLeft style={{ display: 'inline' }} />
        Have Account Already?
      </Text>
    </Flex>
  );
};

export default RegisterForm;
