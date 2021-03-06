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
} from '@chakra-ui/react';
import { useState, useRef, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPet } from '../../api/pets';
import { petsActions } from '../../store/pets';
import { FaCamera } from 'react-icons/fa';

const initialData = {
  name: '',
  dob: '',
  species: '',
  gender: 'male',
  note: '',
};

const defaultImage = 'https://image.flaticon.com/icons/png/512/528/528101.png';

const setNewPetData = (state, action) => {
  return { ...state, [action.type]: [action.value] };
};

const AddPetForm = props => {
  const UserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const avatarRef = useRef();
  const [avatar, setAvatar] = useState(defaultImage);
  const [{ name, dob, species, gender, note }, dispatchNewPetData] = useReducer(
    setNewPetData,
    initialData
  );

  const imagePreview = e => {
    if (!e.target.files.length) return;
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const changeHandler = e => {
    props.eventHandler.typing();
    dispatchNewPetData({ type: e.target.name, value: e.target.value });
  };

  const addHandler = async e => {
    e.preventDefault();
    props.eventHandler.pending();
    try {
      const { data } = await addPet({
        avatar: avatarRef.current.files[0],
        name,
        dob,
        species,
        gender,
        note,
        UserId,
      });
      props.eventHandler.success();
      dispatch(petsActions.update([data]));
    } catch (error) {
      props.eventHandler.fail();
    }
  };

  return (
    <form onSubmit={addHandler} id="newPetForm" enctype="multipart/form-data">
      <VStack spacing="24px" onChange={changeHandler}>
        <FormControl id="avatar">
          <FormLabel>Avatar</FormLabel>
          <Input
            accept="image/*"
            type="file"
            name="avatar"
            d="none"
            onChange={imagePreview}
            ref={avatarRef}
          />
          <Box w="100px" h="100px" pos="relative">
            <Image
              pos="absolute"
              zIndex="99"
              bgSize="cover"
              bgImage={`url(${avatar || defaultImage})`}
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
        <FormControl id="name" isRequired>
          <FormLabel>Pet Name</FormLabel>
          <Input type="text" name="name" value={name} />
        </FormControl>
        <FormControl id="species" isRequired>
          <FormLabel>Type</FormLabel>
          <Select placeholder="Select option" name="species" value={species}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </Select>
        </FormControl>
        <FormControl id="dob" isRequired>
          <FormLabel>Date of birth</FormLabel>
          <Input type="date" name="dob" value={dob} />
        </FormControl>
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <RadioGroup defaultValue={gender} name="gender">
            <HStack>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormControl id="note">
          <FormLabel>Note</FormLabel>
          <Textarea placeholder="Some note?" name="note" value={note} />
        </FormControl>
      </VStack>
    </form>
  );
};

export default AddPetForm;
