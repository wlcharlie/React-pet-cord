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
  useToast,
} from '@chakra-ui/react';

import { getPet } from '../../../api/pets';
import { formatDate } from '../../../utils/convertToDate';

import Motion from '../../motion/Motion';
import PetDetail from './PetDetail';
import PetDetailEdit from './PetDetailEdit';
import BackLink from '../../layouts/BackLink';
import { useHistory } from 'react-router-dom';

const defaultImage = 'https://image.flaticon.com/icons/png/512/528/528101.png';

const PetInfo = () => {
  const toast = useToast();
  const history = useHistory();
  const { petId } = useParams();
  const pets = useSelector(state => state.pets);
  const UserId = useSelector(state => state.auth.id);
  const [pet, setPet] = useState(false);
  const [edit, setEdit] = useState(false);

  if (!pets.find(e => e._id === petId)) {
    history.replace('/pets');
    toast({
      title: 'No found',
      description: 'Sorry, can not found the page your are going to',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }

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
          bgImage={`url(${
            pet.avatar === 'undefined' ? defaultImage : pet.avatar
          })`}
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
                  <Motion>
                    <PetDetail
                      pet={pet}
                      petId={petId}
                      UserId={UserId}
                      switchHandler={switchingHandler}
                    />
                  </Motion>
                )}
                {edit && (
                  <Motion>
                    <PetDetailEdit
                      pet={pet}
                      switchHandler={switchingHandler}
                      getUpdate={getUpdate}
                    />
                  </Motion>
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
