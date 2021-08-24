import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react';
import { Fragment, useRef, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

import AddPetForm from './AddPetForm';

const AddPetMenu = () => {
  const [typed, setTyped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const toast = useToast();

  const leaveConfirm = () => {
    if (typed) {
      const check = window.confirm(
        'Your data still up there, you will lose it after the leaving. Are you sure and leave?'
      );
      if (!check) return;
    }
    setTyped(false);
    onClose();
  };

  const eventHandler = {
    pending: () => {
      setLoading(true);
    },

    success: () => {
      setLoading(false);
      setTyped(false);
      onClose();
      toast({
        title: 'Success',
        description: 'A new pet has joined!',
        status: 'success',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });
    },

    fail: () => {
      setLoading(false);
      setError(true);
    },
  };

  return (
    <Fragment>
      <Box
        as="button"
        pos="fixed"
        bottom="50px"
        right="50px"
        boxShadow="base"
        color="#3182ce"
        bg="white"
        borderWidth="5px"
        borderColor="white"
        borderRadius="50%"
        transition="0.3s "
        onTransitionEnd={onOpen}
        _hover={{ cursor: 'pointer' }}
        _active={{
          transform: 'scale(0)',
          right: '-100px',
        }}
        ref={btnRef}
      >
        <BsPlusCircleFill size={60} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={leaveConfirm}
        finalFocusRef={() => window}
        size="sm"
        onChange={() => setTyped(true)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Adding a new friend?</DrawerHeader>

          <DrawerBody>
            <AddPetForm submit={eventHandler} />
          </DrawerBody>

          {error && (
            <Alert status="warning">
              <AlertIcon />
              Something gone wrong... Please try again!
            </Alert>
          )}

          <DrawerFooter justifyContent="space-between">
            <Button
              isLoading={loading}
              loadingText="working..."
              type="submit"
              colorScheme="blue"
              form="newPetForm"
            >
              Add
            </Button>
            <Button variant="outline" onClick={leaveConfirm}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default AddPetMenu;
