import {
  Box,
  Grid,
  Text,
  Flex,
  Divider,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/convertToDate';
import { FaAngleRight } from 'react-icons/fa';
import { BsDash, BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';

const OverviewCard = ({ data }) => {
  let latestDate = data.records.length
    ? formatDate(new Date(data.records[0].date * 1000))
    : '--';

  const latestData = data.records[0];
  const secondData = data.records[1];
  const compare = {};

  for (let i in latestData) {
    if (latestData[i] > secondData[i]) {
      compare[i] = <BsFillCaretUpFill style={{ color: 'red' }} />;
    } else if (latestData[i] > secondData[i]) {
      compare[i] = <BsFillCaretDownFill style={{ color: 'skyblue' }} />;
    } else {
      compare[i] = <BsDash />;
    }
  }

  return (
    <Box my={3} px="2" w="100%" h={['200px', '170px']}>
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
            bgImage={`url(${
              data.avatar === 'undefined'
                ? 'https://image.flaticon.com/icons/png/512/4388/4388652.png'
                : data.avatar
            })`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            boxShadow="base"
          />
          <Box></Box>
        </Grid>

        <Box w="100%" h="100%" p={2}>
          <Flex justify="space-between" align="center">
            <Text fontSize={24}>{data.name}</Text>
            <Text as="sub">Latest: {latestDate}</Text>
          </Flex>
          <Divider />
          <Grid
            h="70%"
            mt={1}
            templateColumns={['1fr 1fr', '1fr 1fr 1fr']}
            templateRows="1fr 1fr"
            gap={2}
          >
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Weight
              </Text>
              <HStack>
                <Text>
                  {latestData ? latestData.weight : '--'}{' '}
                  <Text as="sub">kg</Text>
                </Text>
                {compare.weight}
              </HStack>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Water
              </Text>
              <HStack>
                <Text>
                  {latestData ? latestData.water : '--'}{' '}
                  <Text as="sub">ml</Text>
                </Text>
                {compare.water}
              </HStack>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Food
              </Text>
              <HStack>
                <Text>
                  {latestData ? latestData.food : '--'} <Text as="sub">g</Text>
                </Text>
                {compare.food}
              </HStack>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Medic
              </Text>
              <Text>{latestData ? (latestData.med ? 'V' : 'X') : '--'}</Text>
            </Flex>
            <Flex w="100%" h="100%" d="column">
              <Text color="gray" fontSize={12}>
                Poo
              </Text>
              <Text>{latestData ? (latestData.poo ? 'V' : 'X') : '--'}</Text>
            </Flex>
          </Grid>
        </Box>
        <Grid w="100%" h="100%" templateRows="1fr 1fr">
          <Box></Box>
          <Link to={`/healths/${data._id}`}>
            <Button
              w="100%"
              h="100%"
              colorScheme="red"
              borderTopRightRadius="50rem"
              borderTopLeftRadius="50rem"
              boxShadow="inner"
            >
              <Text>
                <FaAngleRight size={35} />
              </Text>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverviewCard;
