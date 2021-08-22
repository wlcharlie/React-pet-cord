const db = 'https://pet-cord.herokuapp.com/api';

export const registerAPI = async ({ email, password, username }) => {
  try {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        process.env.REACT_APP_G_API,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    const userRes = await fetch(db + '/users', {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        email,
        UID: data.localId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const user = await userRes.json();
    return { res, data, user };
  } catch (error) {
    return error;
  }
};

export const loginAPI = async ({ email, password }) => {
  try {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        process.env.REACT_APP_G_API,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    const userRes = await fetch(db + '/users/' + data.localId, {
      method: 'GET',
    });
    const user = await userRes.json();
    return { res, data, user };
  } catch (error) {
    return error;
  }
};

export const findAccountAPI = async token => {
  try {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' +
        process.env.REACT_APP_G_API,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    const userRes = await fetch(db + '/users/' + data.users[0].localId, {
      method: 'GET',
    });
    const user = await userRes.json();
    return { res, data, userRes, user };
  } catch {
    return false;
  }
};
