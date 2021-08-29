const db = process.env.REACT_APP_DB;
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

export const updatePetHealth = async ({ PetId, HealthId, record }) => {
  const formData = new FormData();
  for (let i in record) {
    formData.append(i, record[i]);
  }
  try {
    const res = await fetch(db + '/healths/' + PetId + '/' + HealthId, {
      method: 'PUT',
      body: formData,
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePetHealth = async ({ PetId, HealthId }) => {
  try {
    const res = await fetch(db + '/healths/' + PetId + '/' + HealthId, {
      method: 'DELETE',
    });
    const data = res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};

export const overviewHealth = async () => {
  try {
    const res = await fetch(db + '/healths');
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};
