import {
  Flex,
  Box,
  Text,
  Divider,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tag,
  useDisclosure,
  useToast,
  Input,
} from '@chakra-ui/react';
import { Fragment, useRef } from 'react';
import { FaPlus, FaPen, FaRegFrownOpen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import DeleteModal from './DeleteModal';
import { deletePet, getPet } from '../../../api/pets';

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
        <Button w="100px" h="80px" colorScheme="green">
          <VStack>
            <FaPlus />
            <Text>Health</Text>
          </VStack>
        </Button>
        <Button w="100px" h="80px" colorScheme="blue" onClick={switchHandler}>
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
