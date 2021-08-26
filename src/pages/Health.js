import { Fragment } from 'react';

import Header from '../components/Menu/Header';
import Overview from '../components/Healths/Overview';
import HealthInfoCard from '../components/Healths/HealthInfoCard';

const Health = () => {
  return (
    <Fragment>
      <Header />
      <HealthInfoCard />
    </Fragment>
  );
};

export default Health;
