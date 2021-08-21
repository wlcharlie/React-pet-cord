import { Fragment, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import MenuButton from './MenuButton';

const DrawerMenu = props => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Button bg="transparent" ref={btnRef} onClick={onOpen}>
        <FiMenu size={20} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={props.btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>PetCord</Text>
          </DrawerHeader>

          <DrawerBody d="flex" flexDirection="column">
            <MenuButton styles="home">Home</MenuButton>
            <MenuButton styles="pets">Pets</MenuButton>
            <MenuButton styles="records">Health Records</MenuButton>
          </DrawerBody>

          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default DrawerMenu;
