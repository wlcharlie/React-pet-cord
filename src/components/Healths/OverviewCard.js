import { Box, Grid, Text, Flex, Divider, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const OverviewCard = () => {
  const pets = useSelector(state => state.pets);
  return pets.map(e => (
    <Box my={3} px="2" w="100%" h="170px">
      <Grid
        w="100%"
        h="100%"
        templateColumns="1fr 4fr 1fr"
        bgColor="white"
        boxShadow="base"
      >
        <Grid w="100%" h="100%" templateRows="1fr 1fr">
          <Box
            w="100%"
            h="100%"
            borderBottomRightRadius="50rem"
            bgImage={`url(${e.avatar})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            boxShadow="base"
          />
          <Box></Box>
        </Grid>

        <Box w="100%" h="100%" p={2}>
          <Flex justify="space-between" align="center">
            <Text fontSize={24}>{e.name}</Text>
            <Text as="sub">Latest: 09-20</Text>
          </Flex>
          <Divider />
          <Grid
            h="70%"
            mt={1}
            templateColumns="1fr 1fr 1fr"
            templateRows="1fr 1fr"
          >
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Weight
              </Text>
              <Text>
                50 <Text as="sub">kg</Text>
              </Text>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Water
              </Text>
              <Text>
                20 <Text as="sub">ml</Text>
              </Text>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Food
              </Text>
              <Text>
                20 <Text as="sub">g</Text>
              </Text>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Medic
              </Text>
              <Text>V</Text>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Poo
              </Text>
              <Text>X</Text>
            </Flex>
          </Grid>
        </Box>
        <Grid w="100%" h="100%" templateRows="1fr 1fr">
          <Box></Box>
          <Link to={`/healths/${e._id}`} key={e._id}>
            <Button
              w="100%"
              h="100%"
              colorScheme="red"
              borderTopRightRadius="50rem"
              borderTopLeftRadius="50rem"
              boxShadow="inner"
            >
              <FaArrowRight />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  ));
};

export default OverviewCard;
