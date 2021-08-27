import { Box, Grid, Text, Flex, Link } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import GuideButton from './GuideButton';

const Home = () => {
  return (
    <Box w="100%" mt={3} px={['1rem', null, null, null, '15rem']}>
      <Grid templateRows="0.2fr 0.8fr">
        <Flex
          w="100%"
          h="100%"
          justify="center"
          align="center"
          direction={['column', null, null, null, null]}
        >
          <Link as={RouteLink} w="100%" to="/pets">
            <GuideButton data="pets" />
          </Link>
          <Link as={RouteLink} w="100%" to="/healths">
            <GuideButton data="healths" />
          </Link>
          <Box
            as="a"
            w="100%"
            rel="nooppener noreferrer"
            target="_blank"
            href="https://wlcharlie.github.io/"
          >
            <GuideButton data="me" />
          </Box>
        </Flex>
        <Text mt={5} fontSize="40px" textAlign="center" color="white">
          Welcome To PetCord!
        </Text>
      </Grid>
    </Box>
  );
};

export default Home;
