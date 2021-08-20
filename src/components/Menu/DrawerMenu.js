import { Fragment, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import {
  Flex,
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
  Input,
} from '@chakra-ui/react';
import { MdPets, MdHome, MdFavorite } from 'react-icons/md';

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
            <Button
              leftIcon={<MdHome size={20} />}
              size="lg"
              justifyContent="start"
              bg="transparent"
              px={2}
              mb={1}
              _hover={{ bg: '#fea42a', color: 'white' }}
              _focus={{ bg: '#fea42a', color: 'white' }}
              _active={{ bg: '#fea42a', color: 'white' }}
            >
              Home
            </Button>
            <Button
              leftIcon={<MdPets size={20} />}
              size="lg"
              justifyContent="start"
              bg="transparent"
              px={2}
              mb={1}
              _hover={{ bg: '#fea42a', color: 'white' }}
              _focus={{ bg: '#fea42a', color: 'white' }}
              _active={{ bg: '#fea42a', color: 'white' }}
            >
              Pets
            </Button>
            <Button
              leftIcon={<MdFavorite size={20} />}
              size="lg"
              justifyContent="start"
              bg="transparent"
              px={2}
              mb={1}
              _hover={{ bg: '#fea42a', color: 'white' }}
              _focus={{ bg: '#fea42a', color: 'white' }}
              _active={{ bg: '#fea42a', color: 'white' }}
            >
              Health Records
            </Button>
          </DrawerBody>

          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default DrawerMenu;
