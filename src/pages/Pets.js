import { Fragment, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Menu/Header';
import PetsContainer from '../components/layouts/PetsContainer';
import PetCard from '../components/Pets/PetCard';
import AddPetMenu from '../components/Pets/AddPetMenu';
import { toAge } from '../utils/convertToAge';
import { getPets } from '../api/pets';
import PetCardLoading from '../components/layouts/PetCardLoading';

const petReducer = (state, action) => {
  return action.data.map(e => <PetCard key={e._id} data={e} />);
};

const Pets = () => {
  const UserId = useSelector(state => state.auth.id);
  const [pets, petDispatch] = useReducer(petReducer, null);

  const getPetData = async () => {
    const { res, data } = await getPets(UserId);
    if (res.ok) {
      data.dob = toAge(data.dob);
      petDispatch({ data });
    }
  };
  getPetData();

  return (
    <Fragment>
      <Header />
      <PetsContainer>
        {!pets && <PetCardLoading />}
        {pets && pets}
      </PetsContainer>
      <AddPetMenu />
    </Fragment>
  );
};

export default Pets;