import { Grid } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { overviewHealth } from '../../api/healths';
import OverviewCard from './OverviewCard';

const Overview = () => {
  const [petHealthsData, setPetHealthsData] = useState(null);

  useEffect(() => {
    const getOverview = async () => {
      const { data } = await overviewHealth();
      setPetHealthsData(data);
    };

    getOverview();
  }, []);

  return (
    <Fragment>
      <Grid w="100%" templateColumns={['1fr', null, null, null, '1fr 1fr']}>
        {petHealthsData &&
          petHealthsData.map(e => <OverviewCard key={e._id} data={e} />)}
      </Grid>
    </Fragment>
  );
};

export default Overview;
