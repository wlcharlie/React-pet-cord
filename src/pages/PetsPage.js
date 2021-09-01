import { Fragment } from 'react';
import PetsContainer from '../components/layouts/PetsContainer';
import PetCards from '../components/Pets/PetCards';
import AddPetMenu from '../components/Pets/AddPetMenu';

const PetsPage = () => {
  return (
    <Fragment>
      <PetsContainer>
        <PetCards />
      </PetsContainer>
      <AddPetMenu />
    </Fragment>
  );
};

export default PetsPage;
