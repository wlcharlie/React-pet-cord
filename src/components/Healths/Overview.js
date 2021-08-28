import { Grid } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { overviewHealth } from '../../api/healths';
import OverviewCard from './OverviewCard';

const Overview = () => {
  const UserId = useSelector(state => state.auth.id);
  const [petHealthsData, setPetHealthsData] = useState(null);
  useEffect(() => {
    const getOverview = async () => {
      const { data } = await overviewHealth();

      setPetHealthsData(data.filter(e => UserId === e.UserId));
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
