import {
  Text,
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
import { FaRegFrownOpen } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { deletePet } from '../../../api/pets';
import { useDispatch } from 'react-redux';
import { petsActions } from '../../../store/pets';

const DeleteModal = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();
  const check = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteHandler = async () => {
    if (check.current.value === props.name) {
      const { res } = await deletePet({
        petId: props.petId,
        UserId: props.UserId,
        name: check.current.value,
      });
      if (res.ok) {
        dispatch(petsActions.deleted({ id: props.petId }));
        history.push('/pets');
        toast({
          title: 'Deleted',
          description: `Bye, ${props.name}`,
          status: 'success',
          duration: 8000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Fragment>
      <Button onClick={onOpen} w={['85px', '100px']} h="80px" colorScheme="red">
        <VStack>
          <FaRegFrownOpen />
          <Text>Delete</Text>
        </VStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#2d3748" color="white">
          <ModalHeader>Are you sure to DELETE?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>
              Type <Tag>{props.name}</Tag> to delete
            </Text>

            <Input focusBorderColor="crimson" ref={check} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="red" onClick={deleteHandler}>
              DELETE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default DeleteModal;
