import { Text, Box, Grid, Accordion, Skeleton } from '@chakra-ui/react';
import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getPetHealth } from '../../api/healths';
import AddHealthMenu from './AddHealthMenu';
import HealthRecord from './HealthRecord';
import EditHealthForm from './EditHealthForm';

const HealthInfoCard = () => {
  const history = useHistory();
  const { petId } = useParams();
  const pets = useSelector(state => state.pets);
  const [loaded, setLoaded] = useState(false);
  const [pet, setPet] = useState(null);
  const [records, setRecords] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const editModeHandler = data => {
    if (editMode) {
      setEditMode(false);
      return setEditData(null);
    }

    setEditMode(true);
    setEditData(data);
  };

  useEffect(() => {
    const loadingView = async () => {
      const { data } = await getPetHealth(petId);
      setRecords(data);
    };
    loadingView();
    // eslint-disable-next-line
  }, [refresh]);

  useEffect(() => {
    if (pets.length) {
      const petData = pets.filter(e => e._id === petId);
      setPet(petData[0]);
    }
    // eslint-disable-next-line
  }, [pets]);

  useEffect(() => {
    if (pet && records) {
      setLoaded(true);
    }
  }, [pet, records]);

  return (
    <Fragment>
      <Box p="3" w="100%">
        <Link onClick={history.goBack}>{'< Go Back'}</Link>
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
            pos="relative"
          >
            {loaded && (
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
            )}
            {!loaded && <Skeleton w="100%" h="100%" />}
            <Box w="100%" h="100%" p={2} overflowY="auto">
              {loaded && (
                <Text fontSize="20px" fontWeight="bolder">
                  {pet.name}'s Health Records
                </Text>
              )}
              {!loaded && <Skeleton h="20px" />}
              <Accordion allowMultiple d={editMode ? 'none' : ''}>
                {!loaded && <Skeleton h="500px" my={2} />}
                {loaded &&
                  records.map(e => (
                    <HealthRecord
                      data={e}
                      key={e._id}
                      refresh={setRefresh}
                      editModeHandler={editModeHandler}
                    />
                  ))}
              </Accordion>
              {editMode && (
                <EditHealthForm
                  data={editData}
                  refresh={setRefresh}
                  editModeHandler={editModeHandler}
                />
              )}
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box d={editMode ? 'none' : ''}>
        <AddHealthMenu refresh={setRefresh} />
      </Box>
    </Fragment>
  );
};

export default HealthInfoCard;
