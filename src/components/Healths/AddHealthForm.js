import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Image,
  Checkbox,
  InputRightAddon,
  InputGroup,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react';

import { useState, useRef, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { addNewHealth } from '../../api/healths';
import { FaCamera } from 'react-icons/fa';

const initialData = {
  date: null,
  weight: 0,
  water: 0,
  food: 0,
  med: false,
  poo: false,
  other: '',
};

const newHealthReducer = (state, action) => {
  if (action.type === 'med' || action.type === 'poo') {
    return { ...state, [action.type]: !state[action.type] };
  }
  return { ...state, [action.type]: action.value };
};

const AddHealthForm = props => {
  const { petId: PetId } = useParams();
  const imageRef = useRef();
  const [image, setImage] = useState(
    'https://image.flaticon.com/icons/png/512/4047/4047371.png'
  );
  const [{ date, weight, water, food, med, poo, other }, newHealthDispatch] =
    useReducer(newHealthReducer, initialData);

  const imagePreview = e => {
    if (!e.target.files.length) return;
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const changeHandler = e => {
    props.submit.typing();
    newHealthDispatch({ type: e.target.name, value: e.target.value });
  };

  const addHandler = async e => {
    e.preventDefault();
    props.submit.pending();
    const info = {
      PetId,
      record: {
        date,
        weight,
        water,
        food,
        med,
        poo,
        other,
        image: imageRef.current.files[0] || '',
      },
    };

    try {
      await addNewHealth(info);
      props.submit.success();
    } catch (error) {
      props.submit.fail();
    }
  };

  return (
    <form
      onSubmit={addHandler}
      id="newHealthForm"
      enctype="multipart/form-data"
    >
      <Grid
        templateColumns={['1fr', null, '1fr 1fr', '1fr 1fr 1fr 1fr']}
        gap={[2, 5]}
        onChange={changeHandler}
      >
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
        <GridItem colSpan={[1, 2]}>
          <FormControl id="other">
            <FormLabel>Other</FormLabel>
            <Textarea placeholder="Some detail?" name="other" value={other} />
          </FormControl>
        </GridItem>
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
              bgImage={`url(${image})`}
              w="100%"
              h="100%"
              borderWidth="none"
              borderRadius="0%"
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
      </Grid>
    </form>
  );
};

export default AddHealthForm;
