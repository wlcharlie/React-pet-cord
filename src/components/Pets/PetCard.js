import {
  Box,
  GridItem,
  Text,
  Divider,
  Flex,
  Button,
  Badge,
  Tag,
} from '@chakra-ui/react';
import { FaCat, FaHeart, FaPen } from 'react-icons/fa';

const PetCard = () => {
  return (
    <Box
      d="grid"
      gridTemplateColumns="1fr 2fr"
      pos={[null, 'relative', null, 'static']}
      my={[3, 5, null, 0]}
      p={['none', 1, null, 1]}
      w={[null, '90%', '700px', '100%']}
      h={[null, '150px', '200px', '100%']}
      borderRadius="0.5rem"
      boxShadow="base"
      bgColor="white"
    >
      <Box
        pos={[null, 'absolute', null, 'static']}
        bottom={[null, '20px', null]}
        left={[null, '-20px', null]}
        bgImage="url(https://cdn2.thecatapi.com/images/3p6.jpg)"
        borderRadius={['0.5rem', null, null, '0.5rem 0 0 0.5rem']}
        borderWidth={['none', '5px', null, 0]}
        borderColor={['none', 'white', null, 'none']}
        boxSize={['120px', '150px']}
        bgPosition="center"
        bgSize="cover"
      />
      <GridItem colStart={2} pos="relative">
        <Flex direction="column" h="100%">
          <Text
            fontSize="12px"
            fontWeight="lighter"
            fontStyle="italic"
            display={['none', 'block']}
          >
            Naughty
          </Text>
          <Flex align="flex-end" justify="space-between">
            <Text fontSize="30px">Flower</Text>
            <Text mr={3}>Male, 2y</Text>
          </Flex>
          <Divider />
          <Flex direction="column" grow={2} justify="center" mt={1}>
            <Box>
              <Tag size="sm" variant="outline" colorScheme="orange">
                Latest Record: 09/18
              </Tag>
            </Box>
            <Flex align="center">
              <Button colorScheme="orange" mr={1} rightIcon={<FaHeart />}>
                Record
              </Button>
              <Button colorScheme="teal" rightIcon={<FaPen />}>
                Edit
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Box pos="absolute" bottom="0" right="5px" d={['none', 'block']}>
          <FaCat size={'4em'} color="rgb(0,0,0,0.2)" />
        </Box>
      </GridItem>
    </Box>
  );
};

export default PetCard;
