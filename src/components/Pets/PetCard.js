import {
  Box,
  GridItem,
  Text,
  Divider,
  Flex,
  Button,
  Tag,
  Link,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { FaCat, FaDog, FaHeart, FaPen } from 'react-icons/fa';
import { toAge } from '../../utils/convertToAge';

const PetCard = props => {
  const { name, gender, dob, species, note, avatar, _id } = props.data;
  const age = toAge(dob);

  return (
    <Box
      d="grid"
      gridTemplateColumns="1fr 2fr"
      pos={[null, 'relative', null, 'static']}
      my={[3, 5, null, 0]}
      p={['none', 1, null, 0]}
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
        bgImage={`url(${avatar})`}
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
            {note}
          </Text>
          <Flex align="flex-end" justify="space-between">
            <Text fontSize="30px">{name}</Text>
            <Text mr={3}>{gender + ', ' + age + 'y'}</Text>
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
              <Link
                as={RouteLink}
                to={`/pets/${_id}`}
                _hover={{ textDecoration: 'none' }}
              >
                <Button colorScheme="teal" rightIcon={<FaPen />}>
                  Edit
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Box pos="absolute" bottom="0" right="5px" d={['none', 'block']}>
          {species === 'cat' && <FaCat size={'4em'} color="rgb(0,0,0,0.2)" />}
          {species === 'dog' && <FaDog size={'4em'} color="rgb(0,0,0,0.2)" />}
        </Box>
      </GridItem>
    </Box>
  );
};

export default PetCard;
