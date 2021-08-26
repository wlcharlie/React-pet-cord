const db = 'https://pet-cord.herokuapp.com/api';

export const addNewHealth = async ({ PetId, record }) => {
  const formData = new FormData();
  for (let i in record) {
    formData.append(i, record[i]);
  }
  try {
    const res = await fetch(db + '/healths/' + PetId, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};

export const getPetHealth = async PetId => {
  try {
    const res = await fetch(db + '/healths/' + PetId, {
      method: 'GET',
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};
