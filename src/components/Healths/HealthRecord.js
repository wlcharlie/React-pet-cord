import {
  Box,
  Grid,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Button,
  GridItem,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { FaImage, FaEdit, FaTimes } from 'react-icons/fa';
import { formatDate } from '../../utils/convertToDate';

const HealthRecord = ({ data }) => {
  console.log('loop?');
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{
            background: 'linear-gradient(to right, #76b852, #8dc26f)',
            color: 'white',
          }}
        >
          <Box flex="1" textAlign="left">
            {formatDate(new Date(data.date * 1000))}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} bgColor="#FCE0D4">
        <Grid
          w="100%"
          mt={1}
          templateColumns={['1fr 1fr 1fr 1fr 1fr 1fr', 'repeat(8,1fr)']}
        >
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Weight
            </Text>
            <Text>
              {data.weight ? data.weight : '--'} <Text as="sub">kg</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Water
            </Text>
            <Text>
              {data.water ? data.water : '--'} <Text as="sub">ml</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Food
            </Text>
            <Text>
              {data.food ? data.food : '--'} <Text as="sub">g</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Medic
            </Text>
            <Text>{data.med ? 'V' : 'X'}</Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Poo
            </Text>
            <Text>{data.poo ? 'V' : 'X'}</Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Image
            </Text>
            <FaImage />
          </Flex>
          <GridItem colStart={['5', 'unset']} w="100%" h="100%">
            <Button colorScheme="blue">
              <FaEdit />
            </Button>
          </GridItem>
          <GridItem>
            <Button variant="outline" colorScheme="red">
              <FaTimes />
            </Button>
          </GridItem>
        </Grid>
        <Divider my={3} />
        <HStack>
          <Text color="gray" fontSize={12}>
            Note
          </Text>
          <Text>{data.other ? data.other : '--'}</Text>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default HealthRecord;
