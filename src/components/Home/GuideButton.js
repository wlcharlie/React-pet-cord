import { Flex, Text, Box, Grid, VStack, Divider } from '@chakra-ui/react';

const data = {
  pets: {
    title: 'Pets',
    sub: 'Manage / Information',
    image:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },

  healths: {
    title: 'Healths',
    sub: 'Daily Health / Record',
    image:
      'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },

  me: {
    title: 'Author',
    sub: 'Me & about this project',
    image:
      'https://images.unsplash.com/photo-1605163289354-a8b102a71bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
};

const GuideButton = props => {
  return (
    <Flex
      m={2}
      w={['100%', null, null, null, '400px']}
      h="120px"
      bgColor="whiteAlpha.900"
      boxShadow="base"
      borderRadius="1rem"
      justify="center"
      align="center"
      direction="column"
      transition="0.2s ease-out"
      _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
    >
      <Grid w="100%" h="100%" templateColumns="0.2fr 0.8fr">
        <Box
          w="100%"
          h="100%"
          borderLeftRadius="1rem"
          bgSize="cover"
          bgPosition="center"
          bgImage={`url(${data[props.data].image})`}
        />
        <Flex
          px={2}
          w="100%"
          h="100%"
          direction="column"
          justify="space-around"
        >
          <Text fontSize="36px" fontWeight="bolder">
            {data[props.data].title}
          </Text>
          <Divider />
          <Text fontSize="16px" as="em">
            {data[props.data].sub}
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default GuideButton;
