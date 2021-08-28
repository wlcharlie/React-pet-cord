import { Button, Box, Center, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Lost = () => {
  return (
    <Fragment>
      <Center>
        <VStack>
          <Box
            bgImage="url(https://i.imgur.com/5XoWuIY.jpeg)"
            w="150px"
            h="150px"
            bgSize="cover"
            borderRadius="25rem"
          ></Box>
          <Text>"You should not be here... My secret place! MEOW!"</Text>
          <Text>---Not found page---</Text>
          <Button as={Link} to="/home">
            Back to Home Page
          </Button>
        </VStack>
      </Center>
    </Fragment>
  );
};

export default Lost;
