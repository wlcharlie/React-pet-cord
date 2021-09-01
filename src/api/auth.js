const db = process.env.REACT_APP_DB;
const dbErrMsg = 'Oops! Something went wrong, please contact to the service.';

export const registerAPI = async ({ email, password, username }) => {
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
  if (!res.ok) {
    throw new Error(data.error.message);
  }

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
  if (!userRes.ok) {
    throw new Error(dbErrMsg);
  }
  return { data, user };
};

export const loginAPI = async ({ email, password }) => {
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
  if (!res.ok) {
    throw new Error(data.error.message);
  }

  const userRes = await fetch(db + '/users/' + data.localId, {
    method: 'GET',
  });
  const user = await userRes.json();
  if (!userRes.ok) {
    throw new Error(dbErrMsg);
  }

  return { data, user };
};

export const findAccountAPI = async token => {
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
  if (!res.ok) {
    throw new Error(data.error.message);
  }

  const userRes = await fetch(db + '/users/' + data.users[0].localId, {
    method: 'GET',
  });
  const user = await userRes.json();
  if (!userRes.ok) {
    throw new Error(dbErrMsg);
  }

  return { data, user };
};
