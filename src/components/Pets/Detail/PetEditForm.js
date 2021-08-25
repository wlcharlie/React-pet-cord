import { Fragment, useRef, useState } from 'react';
import {
  Textarea,
  Flex,
  Box,
  Text,
  Input,
  Select,
  Divider,
  Button,
} from '@chakra-ui/react';

import { FaCamera } from 'react-icons/fa';

import { updatePet } from '../../../api/pets';

const PetEditForm = ({ pet, switchHandler, getUpdate }) => {
  const avatar = useRef();
  const [petData, setPetData] = useState({
    ...pet,
  });

  const editHandler = e => {
    const preview = URL.createObjectURL(e.target.files[0]);
    setPetData(prev => {
      return { ...prev, [e.target.name]: e.target.value, avatar: preview };
    });
    getUpdate(prev => {
      return { ...prev, avatar: preview };
    });
  };

  const updateInfo = async e => {
    e.preventDefault();
    const updateData = {
      avatar: avatar.current.files[0],
      dob: petData.dob,
      gender: petData.gender,
      species: petData.species,
      note: petData.note,
    };
    const { res, data } = await updatePet({
      data: updateData,
      petId: petData._id,
    });
    if (res.ok) {
      getUpdate(petData);
      switchHandler();
    }
    console.log(res, data);
  };

  return (
    <Fragment>
      <form onSubmit={updateInfo} onChange={editHandler}>
        <Text fontSize={24} fontWeight="bolder">
          EDITING
        </Text>
        <Divider />
        <Box my={3}>
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Name
          </Text>
          <Input value={petData.name} name="name" />
        </Box>
        <Flex w="100%" mt={3} mb={5} justify="space-between">
          <Box w="25%">
            <Text fontSize={14} color="rgba(0,0,0,0.6)">
              Gender
            </Text>
            <Select
              defaultValue={petData.gender}
              name="gender"
              placeholder="Select option"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </Box>
          <Box w="40%">
            <Text fontSize={14} color="rgba(0,0,0,0.6)">
              Date of Birth
            </Text>
            <Input type="date" name="dob" value={petData.dob} />
          </Box>
          <Box w="25%">
            <Text fontSize={14} color="rgba(0,0,0,0.6)">
              Species
            </Text>
            <Select
              name="species"
              defaultValue={petData.species}
              placeholder="Select option"
            >
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </Select>
          </Box>
        </Flex>
        <Box mb={3}>
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Note
          </Text>
          <Textarea name="note" defaultValue={petData.note} />
        </Box>
        <Box pos="absolute" bottom="-20px" left="20px">
          <Button
            mr="3"
            colorScheme="green"
            borderColor="white"
            boxShadow="0 0 0 3px white"
            leftIcon={<FaCamera />}
            onClick={() => avatar.current.click()}
          >
            <Input type="file" name="avatar" d="none" ref={avatar} />
            Change Avatar
          </Button>
        </Box>
        <Box pos="absolute" bottom="-20px" right="20px">
          <Button
            type="submit"
            mr="3"
            colorScheme="blue"
            borderColor="white"
            boxShadow="0 0 0 3px white"
          >
            Save
          </Button>
          <Button
            onClick={switchHandler}
            colorScheme="teal"
            borderColor="white"
            boxShadow="0 0 0 3px white"
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default PetEditForm;
