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
import { NavLink } from 'react-router-dom';

const MenuButton = props => {
  const style = {
    home: <MdHome size={20} />,
    pets: <MdPets size={20} />,
    records: <MdFavorite size={20} />,
  };

  return (
    <Button
      as={NavLink}
      to={`/${props.style}`}
      leftIcon={style[props.style]}
      size="lg"
      justifyContent="start"
      bg="transparent"
      px={2}
      mb={2}
      _hover={{ bg: '#fea42a', color: 'white' }}
      activeStyle={{ backgroundColor: '#fea42a', color: 'white' }}
    >
      {props.children}
    </Button>
  );
};

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
            <MenuButton style="home">Home</MenuButton>
            <MenuButton style="pets">Pets</MenuButton>
            <MenuButton style="records">Health Records</MenuButton>
          </DrawerBody>

          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default DrawerMenu;
