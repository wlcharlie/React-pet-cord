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
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Fragment, useRef, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaCamera } from 'react-icons/fa';

const AddPetMenu = () => {
  const [typed, setTyped] = useState(false);
  const [avatar, setAvatar] = useState(
    'https://image.flaticon.com/icons/png/512/528/528101.png'
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const avatarRef = useRef();

  const imagePreview = e => {
    if (!e.target.files.length) return;
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const addHandler = e => {
    e.preventDefault();
    console.log('23');
  };

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
        _focus={{
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
      >
        <form onSubmit={addHandler} onChange={() => setTyped(true)}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Adding a new friend?</DrawerHeader>

            <DrawerBody>
              <VStack spacing="24px">
                <FormControl id="avatar">
                  <FormLabel>Avatar</FormLabel>
                  <Input
                    accept="image/*"
                    type="file"
                    d="none"
                    onChange={imagePreview}
                    ref={avatarRef}
                  />
                  <Box w="100px" h="100px" pos="relative">
                    <Image
                      pos="absolute"
                      zIndex="99"
                      bgSize="cover"
                      bgImage={`url(${avatar})`}
                      w="100%"
                      h="100%"
                      borderRadius="50%"
                      pos="absolute"
                      transition="0.2s"
                      _hover={{
                        filter: 'blur(2px) brightness(50%)',
                        cursor: 'pointer',
                        zIndex: '97',
                      }}
                      onClick={() => avatarRef.current.click()}
                    />
                    <Box
                      color="rgba(255,255,255,0.6)"
                      zIndex="98"
                      pos="absolute"
                      top="50%"
                      left="50%"
                      mt="-10px"
                      ml="-10px"
                    >
                      <FaCamera size={20} />
                    </Box>
                  </Box>
                </FormControl>
                <FormControl id="name" isRequired>
                  <FormLabel>Pet Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="species" isRequired>
                  <FormLabel>Type</FormLabel>
                  <Select placeholder="Select option">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </Select>
                </FormControl>
                <FormControl id="dob" isRequired>
                  <FormLabel>Date of birth</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl id="gender" isRequired>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup defaultValue="male">
                    <HStack>
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl id="note">
                  <FormLabel>Note</FormLabel>
                  <Textarea placeholder="Some note?" />
                </FormControl>
              </VStack>
            </DrawerBody>

            <DrawerFooter justifyContent="space-between">
              <Button type="submit" colorScheme="blue">
                Add
              </Button>
              <Button variant="outline" onClick={leaveConfirm}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </Fragment>
  );
};

export default AddPetMenu;
