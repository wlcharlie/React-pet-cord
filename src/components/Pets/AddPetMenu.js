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
import { Fragment, useRef } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import useFormEvent from '../../hooks/useFormEvent';
import { AlertError } from '../layouts/Alert';

import AddPetForm from './AddPetForm';

const AddPetMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { eventHandler, leaveConfirm, loading, error } = useFormEvent({
    refresh: () => {},
    onClose,
  });
  const btnRef = useRef();

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
        onChange={eventHandler.typing()}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Adding a new friend?</DrawerHeader>

          <DrawerBody>
            <AddPetForm eventHandler={eventHandler} />
          </DrawerBody>

          {error && <AlertError />}

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
