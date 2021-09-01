const db = process.env.REACT_APP_DB;

export const addPet = async petsData => {
  const formData = new FormData();
  for (let i in petsData) {
    formData.append(i, petsData[i]);
  }

  const res = await fetch(db + '/pets', {
    method: 'POST',
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return { res, data };
};

export const getPets = async UserId => {
  try {
    const res = await fetch(db + '/pets/' + UserId);
    const data = await res.json();
    return { res, data };
  } catch (error) {
    return error;
  }
};

export const getPet = async ({ UserId, petId }) => {
  try {
    const res = await fetch(db + '/pets/' + UserId + '/' + petId);
    const data = await res.json();
    return { res, data };
  } catch (error) {
    return error;
  }
};

export const updatePet = async ({ data, petId }) => {
  try {
    const formData = new FormData();
    for (let i in data) {
      formData.append(i, data[i]);
    }
    try {
      const res = await fetch(db + '/pets/' + petId, {
        method: 'PUT',
        body: formData,
      });
      const data = await res.json();
      return { res, data };
    } catch (error) {
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const deletePet = async ({ UserId, name, petId }) => {
  try {
    const res = await fetch(db + '/pets/' + petId, {
      method: 'DELETE',
      body: {
        petId,
        UserId,
        name,
      },
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    return error;
  }
};
