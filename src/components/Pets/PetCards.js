import {
  Box,
  GridItem,
  Text,
  Divider,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';

import { Link as RouteLink } from 'react-router-dom';
import { toAge } from '../../utils/convertToAge';
import { FaCat, FaDog, FaHeart, FaAngleRight } from 'react-icons/fa';
import PetCardLoading from '../layouts/PetCardLoading';
import { AnimatePresence, motion } from 'framer-motion';

const defaultImage = 'https://image.flaticon.com/icons/png/512/528/528101.png';

const setPets = (state, action) => {
  return [...action];
};

const PetCard = props => {
  const { name, gender, dob, species, note, avatar, _id } = props.data;
  const age = toAge(dob);
  return (
    <Box
      as={motion.div}
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
      initial={{ transform: 'translateX(20%)', opacity: 0 }}
      animate={{
        transform: 'translateX(0%)',
        opacity: 1,
        transition: { type: 'spring', delay: props.time / 4 },
      }}
      exit={{ opacity: 0 }}
    >
      <Box
        pos={[null, 'absolute', null, 'static']}
        bottom={[null, '20px', null]}
        left={[null, '-20px', null]}
        bgImage={`url(${avatar === 'undefined' ? defaultImage : avatar})`}
        borderLeftRadius={['0.5rem', '0']}
        borderRadius={[null, '0.5rem', null, '0.5rem 0 0 0.5rem']}
        borderWidth={['none', '5px', null, 0]}
        borderColor={['none', 'white', null, 'none']}
        boxSize={['120px', '150px']}
        bgPosition="center"
        bgSize="cover"
        boxShadow="base"
      />
      <GridItem mx={1} colStart={2} pos="relative">
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
            <Flex align="center">
              <Link
                as={RouteLink}
                to={`/pets/${_id}`}
                _hover={{ textDecoration: 'none' }}
                mr={1}
              >
                <Button colorScheme="blue" rightIcon={<FaAngleRight />}>
                  Info
                </Button>
              </Link>
              <Link
                as={RouteLink}
                to={`/healths/${_id}`}
                _hover={{ textDecoration: 'none' }}
                mr={1}
              >
                <Button colorScheme="orange" rightIcon={<FaHeart />}>
                  Record
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

const PetCards = () => {
  const petData = useSelector(state => state.pets);
  const [pets, dispatchPets] = useReducer(setPets, []);

  useEffect(() => {
    if (!petData) return;
    dispatchPets(petData);
  }, [petData]);

  return !pets.length ? (
    <PetCardLoading />
  ) : (
    <AnimatePresence exitBeforeEnter>
      {pets.map((e, i) => (
        <PetCard key={e._id} data={e} time={i} />
      ))}
    </AnimatePresence>
  );
};

export default PetCards;
