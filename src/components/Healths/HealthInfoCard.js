import { Text, Box, Grid, Accordion, Skeleton } from '@chakra-ui/react';
import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPetHealth } from '../../api/healths';
import AddHealthMenu from './AddHealthMenu';
import HealthRecord from './HealthRecord';

const HealthInfoCard = () => {
  const { petId } = useParams();
  const pets = useSelector(state => state.pets);
  const [loaded, setLoaded] = useState(false);
  const [pet, setPet] = useState(null);
  const [records, setRecords] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadingView = async () => {
      const { res, data } = await getPetHealth(petId);
      setRecords(data);
    };
    loadingView();
  }, [refresh]);

  useEffect(() => {
    if (pets.length) {
      const petData = pets.filter(e => e._id === petId);
      setPet(petData[0]);
    }
  }, [pets]);

  useEffect(() => {
    if (pet && records) {
      setLoaded(true);
    }
  }, [pet, records]);

  return (
    <Fragment>
      <Box p="3" w="100%">
        <Box
          w="100%"
          h="80vh"
          borderRadius="1rem"
          bgColor="white"
          boxShadow="base"
        >
          <Grid
            w="100%"
            h="100%"
            templateColumns={['1fr', null, '0.3fr 0.7fr']}
            templateRows={['0.4fr 0.6fr', null, '1fr']}
          >
            {loaded ? (
              <Box
                w="100%"
                h="100%"
                borderTopLeftRadius={['1rem', null, '1rem']}
                borderTopRightRadius={['1rem', null, '0']}
                borderBottomLeftRadius={['0', null, '1rem']}
                bgImage={`url(${pet.avatar})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
              />
            ) : (
              <Skeleton w="100%" h="100%" />
            )}
            <Box w="100%" h="100%" p={2} overflowY="auto">
              {loaded && (
                <Text fontSize="20px" fontWeight="bolder">
                  {pet.name}'s Health Records
                </Text>
              )}
              {!loaded && <Skeleton h="20px" />}
              <Accordion allowMultiple>
                {!loaded && <Skeleton h="500px" my={2} />}
                {loaded &&
                  records.map(e => (
                    <HealthRecord data={e} key={e._id} refresh={setRefresh} />
                  ))}
              </Accordion>
            </Box>
          </Grid>
        </Box>
      </Box>
      <AddHealthMenu refresh={setRefresh} />
    </Fragment>
  );
};

export default HealthInfoCard;
