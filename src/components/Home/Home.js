import { Box, Grid, Text, Flex, Link, Divider, Image } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import GuideButton from './GuideButton';
import { FaArrowRight } from 'react-icons/fa';

const ImageA = 'https://image.flaticon.com/icons/png/512/4484/4484352.png';
const ImageB = 'https://image.flaticon.com/icons/png/512/3111/3111463.png';
const ImageC = 'https://image.flaticon.com/icons/png/512/1042/1042339.png';

const Home = () => {
  return (
    <Box w="100%" h="80%" mt={3} px={['1rem', null, null, null, '15rem']}>
      <Text mt={5} fontSize="40px" textAlign="center" color="white">
        Welcome To PetCord!
      </Text>
      <Divider />
      <Grid
        my={2}
        mx={['0', null, null, '10rem']}
        templateColumns="auto 0.5fr auto 0.5fr auto"
        alignItems="center"
      >
        <Box
          d="flex"
          mx="auto"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            bgColor="white"
            borderRadius="25rem"
            boxSize={['50px', '100px']}
            bgPosition="center"
            bgSize="cover"
            src={ImageA}
          ></Image>
          <Text mt={3} fontSize={['12px', '20px']}>
            Add Pets
          </Text>
        </Box>
        <Box d="flex" mx="auto">
          <FaArrowRight color="white" />
        </Box>
        <Box
          d="flex"
          mx="auto"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            bgColor="white"
            borderRadius="25rem"
            boxSize={['50px', '100px']}
            bgPosition="center"
            bgSize="cover"
            src={ImageB}
          ></Image>
          <Text mt={3} fontSize={['12px', '20px']}>
            Daily Check
          </Text>
        </Box>
        <Box d="flex" mx="auto">
          <FaArrowRight color="white" />
        </Box>
        <Box
          d="flex"
          mx="auto"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            bgColor="white"
            borderRadius="25rem"
            boxSize={['50px', '100px']}
            bgPosition="center"
            bgSize="cover"
            src={ImageC}
          ></Image>
          <Text mt={3} fontSize={['12px', '20px']}>
            Take photo
          </Text>
        </Box>
      </Grid>
      <Divider />
      <Grid>
        <Flex
          w="100%"
          h="100%"
          justify="center"
          align="center"
          direction={['column', null, null, null, null]}
        >
          <Link
            as={RouteLink}
            w="100%"
            to="/pets"
            _hover={{ textDecoration: 'none' }}
          >
            <GuideButton data="pets" />
          </Link>
          <Link
            as={RouteLink}
            w="100%"
            to="/healths"
            _hover={{ textDecoration: 'none' }}
          >
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
      </Grid>
    </Box>
  );
};

export default Home;
