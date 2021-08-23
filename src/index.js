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
import { authActions } from './store/auth';

findAccountAPI(localStorage.getItem('token')).then(data => {
  if (!data || !data.res.ok || !data.userRes.ok) {
    store.dispatch(authActions.logout());
  } else {
    store.dispatch(
      authActions.login({ token: localStorage.getItem('token'), ...data.user })
    );
  }

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/React-pet-cord">
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
