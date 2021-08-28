import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Image,
  Checkbox,
  Stack,
  InputRightAddon,
  InputGroup,
  HStack,
  VStack,
  Divider,
  Button,
  Text,
} from '@chakra-ui/react';

import { useState, useRef, useReducer } from 'react';
import useFormEvent from '../../hooks/useFormEvent';
import { formatDate } from '../../utils/convertToDate';
import { updatePetHealth } from '../../api/healths';
import { AlertError } from '../layouts/Alert';
import { FaCamera } from 'react-icons/fa';

const newHealthReducer = (state, action) => {
  if (action.type === 'med' || action.type === 'poo') {
    return { ...state, [action.type]: !state[action.type] };
  }
  return { ...state, [action.type]: action.value };
};

const AddHealthForm = ({ data, editModeHandler, refresh }) => {
  const { eventHandler, leaveConfirm, loading, error } = useFormEvent({
    refresh,
    onClose: editModeHandler,
  });

  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [{ date, weight, water, food, med, poo, other }, newHealthDispatch] =
    useReducer(newHealthReducer, {
      ...data,
      date: formatDate(new Date(data.date * 1000)),
    });

  const imagePreview = e => {
    if (!e.target.files.length) return;
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const changeHandler = e => {
    eventHandler.typing();
    newHealthDispatch({ type: e.target.name, value: e.target.value });
  };
  console.log(data);
  const addHandler = async e => {
    e.preventDefault();
    eventHandler.pending();
    const info = {
      PetId: data.PetId._id,
      HealthId: data._id,
      record: {
        date,
        weight,
        water,
        food,
        med,
        poo,
        other,
        image: imageRef.current.files[0] || data.image[0],
      },
    };

    try {
      await updatePetHealth(info);
      eventHandler.success();
    } catch (error) {
      eventHandler.fail();
    }
  };
  return (
    <form onSubmit={addHandler} encType="multipart/form-data">
      <Divider />
      <Text>The data were ....</Text>
      <VStack mx={3} mt={3} my="50px" spacing="20px" onChange={changeHandler}>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={date} />
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Weight</FormLabel>
          <InputGroup>
            <Input type="number" name="weight" value={weight} />
            <InputRightAddon children="kg" />
          </InputGroup>
        </FormControl>
        <FormControl id="water">
          <FormLabel>Water</FormLabel>
          <InputGroup>
            <Input type="number" name="water" value={water} />
            <InputRightAddon children="ml" />
          </InputGroup>
        </FormControl>
        <FormControl id="food">
          <FormLabel>Food</FormLabel>
          <InputGroup>
            <Input type="number" name="food" value={food} />
            <InputRightAddon children="g" />
          </InputGroup>
        </FormControl>
        <FormControl id="daily">
          <FormLabel>Daily Check</FormLabel>
          <HStack spacing={4}>
            <Checkbox name="med" isChecked={med}>
              Medic
            </Checkbox>

            <Checkbox name="poo" isChecked={poo}>
              Poo
            </Checkbox>
          </HStack>
        </FormControl>
        <Stack
          w="100%"
          h="100%"
          spacing="20px"
          direction={['column', null, 'row']}
        >
          <FormControl id="other">
            <FormLabel>Other</FormLabel>
            <Textarea placeholder="Some detail?" name="other" value={other} />
          </FormControl>

          <FormControl id="image">
            <FormLabel>Image</FormLabel>
            <Input
              accept="image/*"
              type="file"
              name="image"
              d="none"
              onChange={imagePreview}
              ref={imageRef}
            />
            <Box w="100px" h="100px" pos="relative">
              <Image
                pos="absolute"
                zIndex="99"
                bgSize="cover"
                bgImage={`url(${image || data.image[0]})`}
                w="100%"
                h="100%"
                borderRadius="50%"
                transition="0.2s"
                _hover={{
                  filter: 'blur(2px) brightness(50%)',
                  cursor: 'pointer',
                  zIndex: '97',
                }}
                onClick={() => imageRef.current.click()}
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
        </Stack>
      </VStack>
      <HStack pos="absolute" bottom="-20px" right="10">
        <Button
          type="submit"
          colorScheme="blue"
          boxShadow="base"
          isLoading={loading}
        >
          Save
        </Button>
        <Button colorScheme="teal" boxShadow="base" onClick={leaveConfirm}>
          Cancel
        </Button>
      </HStack>
      <HStack pos="absolute" bottom={['-15px', '-25px']} left="10" w="50%">
        {error && <AlertError />}
      </HStack>
    </form>
  );
};

export default AddHealthForm;
