import { Spinner, Center, Text } from '@chakra-ui/react';
import { Fragment } from 'react';

const Loading = () => {
  return (
    <Fragment>
      <Center mt={5}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text mr={2}>Working on...</Text>
      </Center>
    </Fragment>
  );
};

export default Loading;
