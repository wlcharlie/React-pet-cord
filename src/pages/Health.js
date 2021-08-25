import { Fragment } from 'react';

import Header from '../components/Menu/Header';
import Overview from '../components/Healths/Overview';
import HealthInfo from '../components/Healths/HealthInfo';

const Health = () => {
  return (
    <Fragment>
      <Header />
      <HealthInfo />
    </Fragment>
  );
};

export default Health;
