import { Grid } from '@chakra-ui/react';
import { Fragment } from 'react';
import OverviewCard from './OverviewCard';

const Overview = () => {
  return (
    <Fragment>
      <Grid w="100%" templateColumns={['1fr', null, null, null, '1fr 1fr']}>
        <OverviewCard />
      </Grid>
    </Fragment>
  );
};

export default Overview;
