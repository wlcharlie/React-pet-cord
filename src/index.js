import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/index.js';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { findAccountAPI } from './api/auth';
import { getPets } from './api/pets';
import { authActions } from './store/auth';
import { petsActions } from './store/pets';

const init = async () => {
  const data = await findAccountAPI(localStorage.getItem('token'));

  if (data && data.res.ok && data.userRes.ok) {
    const res = await getPets(data.user._id);

    store.dispatch(petsActions.update(res.data));
    store.dispatch(
      authActions.login({
        token: localStorage.getItem('token'),
        ...data.user,
      })
    );
  } else {
    store.dispatch(authActions.logout());
  }
  render();
};

const render = () => {
  return ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
};

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
