const db = 'https://pet-cord.herokuapp.com/api';

export const addPet = async data => {
  const formData = new FormData();
  for (let i in data) {
    formData.append(i, data[i]);
  }
  try {
    const res = await fetch(db + '/pets', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    return error;
  }
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
