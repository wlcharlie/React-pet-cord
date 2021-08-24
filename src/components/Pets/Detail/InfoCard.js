import { Fragment, useEffect, useState, useRef, lazy } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {
  Container,
  Box,
  Text,
  Divider,
  Switch,
  Tag,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  VStack,
  Link,
} from '@chakra-ui/react';
import { FaPlus, FaPen, FaRegFrownOpen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { deletePet, getPet } from '../../../api/pets';
import PetDetail from './PetDetail';
import PetEditForm from './PetEditForm';

let init = true;

const PetInfo = () => {
  const history = useHistory();
  const { petId } = useParams();
  const UserId = useSelector(state => state.auth.id);
  const [pet, setPet] = useState(false);
  const [edit, setEdit] = useState(false);

  const switchingHandler = () => {
    setEdit(prev => !prev);
  };

  useEffect(() => {
    if (init) {
      return (init = false);
    }
  }, [edit]);

  useEffect(() => {
    const getPetData = async () => {
      const { res, data } = await getPet({ UserId, petId });
      if (res.ok) {
        setPet(data);
      }
    };

    getPetData();
  }, []);
  console.log('looping');
  return (
    <Fragment>
      <Container w="100%" mt="2rem" mb={5}>
        <Link onClick={history.goBack}>{'< Go Back'}</Link>
      </Container>
      <Container>
        <Tabs variant="soft-rounded" pos="relative">
          <TabList mb={1}>
            <Tab>One</Tab>
            <Tab>Two</Tab>
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
                <PetEditForm pet={pet} switchHandler={switchingHandler} />
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
