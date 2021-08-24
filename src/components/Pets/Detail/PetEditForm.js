import { Fragment } from 'react';
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
import { formatDate } from '../../../utils/convertToDate';
const PetEditForm = ({ pet, switchHandler }) => {
  return (
    <Fragment>
      <Text fontSize={24} fontWeight="bolder">
        EDITING
      </Text>
      <Divider />
      <Box my={3}>
        <Text fontSize={14} color="rgba(0,0,0,0.6)">
          Name
        </Text>
        <Input value={pet.name} />
      </Box>
      <Flex w="100%" mt={3} mb={5} justify="space-between">
        <Box w="25%">
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Gender
          </Text>
          <Input type="text" value={pet.name} />
        </Box>
        <Box w="40%">
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Date of Birth
          </Text>
          <Input type="date" value={formatDate(new Date(pet.dob * 1000))} />
        </Box>
        <Box w="25%">
          <Text fontSize={14} color="rgba(0,0,0,0.6)">
            Species
          </Text>
          <Select defaultValue={pet.species} placeholder="Select option">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </Select>
        </Box>
      </Flex>
      <Box mb={3}>
        <Text fontSize={14} color="rgba(0,0,0,0.6)">
          Note
        </Text>
        <Textarea defaultValue={pet.note} />
      </Box>
      <Box pos="absolute" bottom="-20px" right="20px">
        <Button
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
    </Fragment>
  );
};

export default PetEditForm;
