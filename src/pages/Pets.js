import { Fragment } from 'react';
import Header from '../components/Menu/Header';
import PetsContainer from '../components/layouts/PetsContainer';
import PetCard from '../components/Pets/PetCard';

const Pets = () => {
  return (
    <Fragment>
      <Header />
      <PetsContainer>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </PetsContainer>
    </Fragment>
  );
};

export default Pets;
