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
      console.log(data);
    };

    getPetData();
    // eslint-disable-next-line
  }, []);

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
        </Tabs>
      </Container>

      <Box
        w="100%"
        h="300px"
        mt="2rem"
        bgColor="white"
        bgImage={`url(${pet.avatar})`}
        bgPosition="center"
        bgSize="cover"
        pos="absolute"
        bottom="0"
      />
    </Fragment>
  );
};

export default PetInfo;
