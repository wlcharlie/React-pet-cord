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

const HealthRecord = () => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            2021-08-26
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
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
              50 <Text as="sub">kg</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Water
            </Text>
            <Text>
              20 <Text as="sub">ml</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Food
            </Text>
            <Text>
              20 <Text as="sub">g</Text>
            </Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Medic
            </Text>
            <Text>V</Text>
          </Flex>
          <Flex w="100%" h="100%" d="column">
            <Text color="gray" fontSize={12}>
              Poo
            </Text>
            <Text>X</Text>
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
          <Text>睡一整天，指甲好長</Text>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default HealthRecord;
