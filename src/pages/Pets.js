import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PetsContainer from '../components/layouts/PetsContainer';
import PetCard from '../components/Pets/PetCard';
import AddPetMenu from '../components/Pets/AddPetMenu';
import PetCardLoading from '../components/layouts/PetCardLoading';

const Pets = () => {
  const petData = useSelector(state => state.pets);
  const [pets, setPet] = useState(null);

  useEffect(() => {
    setPet(petData.map(e => <PetCard key={e._id} data={e} />));
  }, [petData]);

  return (
    <Fragment>
      <PetsContainer>
        {!pets && <PetCardLoading />}
        {pets && pets}
      </PetsContainer>
      <AddPetMenu />
    </Fragment>
  );
};

export default Pets;
