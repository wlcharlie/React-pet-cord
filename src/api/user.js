const db = process.env.REACT_APP_DB;
export const updateUserInfo = async ({ id, name, avatar }) => {
  const formData = new FormData();
  formData.append('name', name);
  if (avatar) {
    formData.append('avatar', avatar);
  }

  try {
    const res = await fetch(db + '/users/' + id, {
      method: 'PUT',
      body: formData,
    });
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePassword = async ({ idToken, password }) => {
  try {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' +
        process.env.REACT_APP_G_API,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return { res, data };
  } catch (error) {
    throw new Error(error);
  }
};
