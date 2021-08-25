import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {
  Container,
  Box,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  Link,
  Skeleton,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { getPet } from '../../../api/pets';
import { formatDate } from '../../../utils/convertToDate';

import PetDetail from './PetDetail';
import PetEditForm from './PetEditForm';

const PetInfo = () => {
  const history = useHistory();
  const { petId } = useParams();
  const UserId = useSelector(state => state.auth.id);
  const [pet, setPet] = useState(false);
  const [edit, setEdit] = useState(false);

  const switchingHandler = () => {
    setEdit(prev => !prev);
  };

  const getUpdate = data => {
    setPet(data);
  };

  useEffect(() => {
    const getPetData = async () => {
      const { res, data } = await getPet({ UserId, petId });
      if (res.ok) {
        setPet({ ...data, dob: formatDate(new Date(data.dob * 1000)) });
      }
    };

    getPetData();
    // eslint-disable-next-line
  }, [petId]);

  return (
    <Fragment>
      <Container w="100%" mt="2rem" mb={5}>
        <Link onClick={history.goBack}>{'< Go Back'}</Link>
      </Container>
      <Container>
        <Tabs variant="soft-rounded" pos="relative">
          <TabList mb={1}>
            <Tab>Info</Tab>
            <Tab>Health Chart</Tab>
          </TabList>
          <Skeleton borderRadius="2xl" isLoaded={pet}>
            <TabPanels>
              <TabPanel
                w="100%"
                h="350px"
                boxShadow="base"
                borderRadius="2xl"
                bg="white"
              >
                {!edit && (
                  <PetDetail
                    pet={pet}
                    petId={petId}
                    UserId={UserId}
                    switchHandler={switchingHandler}
                  />
                )}
                {edit && (
                  <PetEditForm
                    pet={pet}
                    switchHandler={switchingHandler}
                    getUpdate={getUpdate}
                  />
                )}
              </TabPanel>
              <TabPanel>這裡會放健康圖表</TabPanel>
            </TabPanels>
          </Skeleton>
        </Tabs>
      </Container>

      <Box
        w="100%"
        h={['250px', null, null, null, '250px', '300px']}
        bgColor="white"
        bgImage={`url(${pet.avatar})`}
        bgPosition="center"
        bgSize={['cover', null, null, null, 'contain']}
        pos="absolute"
        bottom="0"
      >
        <Skeleton w="100%" h="100%" isLoaded={pet} />
      </Box>
    </Fragment>
  );
};

export default PetInfo;
