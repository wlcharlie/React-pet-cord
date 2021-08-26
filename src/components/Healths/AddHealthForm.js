import {
  Box,
  Input,
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
  Checkbox,
  Stack,
  InputRightAddon,
  InputGroup,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';
import { useState, useRef, useReducer } from 'react';
import { useSelector } from 'react-redux';

import { addPet } from '../../api/pets';
import { useHistory } from 'react-router';

const initialData = {
  name: '',
  dob: '',
  species: '',
  gender: 'male',
  note: '',
};

const newPetReducer = (state, action) => {
  return { ...state, [action.type]: [action.value] };
};

const AddHealthForm = props => {
  const history = useHistory();
  const UserId = useSelector(state => state.auth.id);

  const avatarRef = useRef();
  const [avatar, setAvatar] = useState(
    'https://image.flaticon.com/icons/png/512/528/528101.png'
  );
  const [{ name, dob, species, gender, note }, newPetDispatch] = useReducer(
    newPetReducer,
    initialData
  );

  const imagePreview = e => {
    if (!e.target.files.length) return;
    console.log(e.target.files);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const changeHandler = e => {
    newPetDispatch({ type: e.target.name, value: e.target.value });
  };

  const addHandler = async e => {
    e.preventDefault();
    props.submit.pending();
    const { res } = await addPet({
      avatar: avatarRef.current.files[0],
      name,
      dob,
      species,
      gender,
      note,
      UserId,
    });
    if (res.ok) {
      props.submit.success();
      history.go(0);
    } else {
      props.submit.fail();
    }
  };

  return (
    <form
      onSubmit={addHandler}
      id="newHealthForm"
      enctype="multipart/form-data"
    >
      <Grid templateColumns="1fr 1fr 1fr 1fr" gap={6} onChange={changeHandler}>
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={dob} />
        </FormControl>
        <FormControl id="name">
          <FormLabel>Weight</FormLabel>
          <InputGroup>
            <Input type="number" name="weight" value={dob} />
            <InputRightAddon children="kg" />
          </InputGroup>
        </FormControl>
        <FormControl id="water">
          <FormLabel>Water</FormLabel>
          <InputGroup>
            <Input type="number" name="water" value={dob} />
            <InputRightAddon children="ml" />
          </InputGroup>
        </FormControl>
        <FormControl id="food">
          <FormLabel>Food</FormLabel>
          <InputGroup>
            <Input type="number" name="food" value={dob} />
            <InputRightAddon children="g" />
          </InputGroup>
        </FormControl>
        <FormControl id="daily">
          <FormLabel>Daily Check</FormLabel>
          <Stack spacing={10} direction="row">
            <Checkbox defaultIsChecked>Medic</Checkbox>
            <Checkbox defaultIsChecked>Poo</Checkbox>
          </Stack>
        </FormControl>
        <GridItem colSpan={2}>
          <FormControl id="other">
            <FormLabel>Other</FormLabel>
            <Textarea placeholder="Some detail?" name="other" value={note} />
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
      </Grid>
    </form>
  );
};

export default AddHealthForm;
