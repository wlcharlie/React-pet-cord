import { Text, Box, Grid, Accordion } from '@chakra-ui/react';
import { Fragment } from 'react';
import AddHealthMenu from './AddHealthMenu';
import HealthRecord from './HealthRecord';

const HealthInfoCard = () => {
  return (
    <Fragment>
      <Box p="3" w="100%">
        <Box w="100%" h="80vh" borderRadius="1rem" bgColor="white">
          <Grid
            w="100%"
            h="100%"
            templateColumns={['1fr', null, '0.3fr 0.7fr']}
            templateRows={['0.4fr 0.6fr', null, '1fr']}
          >
            <Box
              w="100%"
              h="100%"
              borderTopLeftRadius={['1rem', null, '1rem']}
              borderTopRightRadius={['1rem', null, '0']}
              borderBottomLeftRadius={['0', null, '1rem']}
              bgImage="url(https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            ></Box>
            <Box w="100%" h="100%" p={2}>
              <Text fontSize="20px" fontWeight="bolder">
                Pika's Health Records
              </Text>
              <Accordion>
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
                <HealthRecord />
              </Accordion>
            </Box>
          </Grid>
        </Box>
      </Box>
      <AddHealthMenu />
    </Fragment>
  );
};

export default HealthInfoCard;
