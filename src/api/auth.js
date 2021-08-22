export const registerAPI = async ({ email, password }) => {
  return await fetch(
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
};

export const loginAPI = async ({ email, password }) => {
  return await fetch(
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
};

export const findAccountAPI = async token => {
  return await fetch(
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
};
