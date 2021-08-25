import { Flex, Box, Text, Divider, Button, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';

import DeleteModal from './DeleteModal';

const PetDetail = ({ pet, petId, UserId, switchHandler }) => {
  return (
    <Fragment>
      <Text fontSize={50}>{pet.name}</Text>
      <Divider />
      <Flex mt={3} mb={5} justify="space-between">
        <Box>
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Gender
          </Text>
          <Text>{pet.gender}</Text>
        </Box>
        <Box>
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Date of Birth
          </Text>
          <Text>{pet.dob}</Text>
        </Box>
        <Box>
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Species
          </Text>
          <Text>{pet.species}</Text>
        </Box>
      </Flex>
      <Box mb={3}>
        <Text fontSize={14} color="rgba(0,0,0,0.6)">
          Note
        </Text>
        <Text>{pet.note}</Text>
      </Box>
      <Divider />
      <Flex h="33%" align="center" justify="space-around">
        <Button w={['85px', '100px']} h="80px" colorScheme="green">
          <VStack>
            <FaPlus />
            <Text>Health</Text>
          </VStack>
        </Button>
        <Button
          w={['85px', '100px']}
          h="80px"
          colorScheme="blue"
          onClick={switchHandler}
        >
          <VStack>
            <FaPen />
            <Text>Edit Profile</Text>
          </VStack>
        </Button>
        <DeleteModal name={pet.name} petId={petId} UserId={UserId} />
      </Flex>
    </Fragment>
  );
};

export default PetDetail;
