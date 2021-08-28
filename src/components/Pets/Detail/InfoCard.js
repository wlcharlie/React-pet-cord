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
  Skeleton,
} from '@chakra-ui/react';

import { getPet } from '../../../api/pets';
import { formatDate } from '../../../utils/convertToDate';

import PetDetail from './PetDetail';
import PetEditForm from './PetEditForm';
import BackLink from '../../layouts/BackLink';

const defaultImage = 'https://image.flaticon.com/icons/png/512/528/528101.png';

const PetInfo = () => {
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
        <BackLink />
      </Container>
      <Container pos="relative">
        <Box
          w="100px"
          h="100px"
          borderRadius="25rem"
          bgColor="white"
          bgImage={`url(${pet.avatar || defaultImage})`}
          bgPosition="center"
          bgSize="cover"
          pos="absolute"
          right="50px"
        >
          <Skeleton w="100%" h="100%" isLoaded={pet} />
        </Box>
        <Tabs variant="soft-rounded">
          <TabList mb={1}>
            <Tab>Info</Tab>
            <Tab>Something</Tab>
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
              <TabPanel>這裡還不知道可以放什麼</TabPanel>
            </TabPanels>
          </Skeleton>
        </Tabs>
      </Container>
    </Fragment>
  );
};

export default PetInfo;
