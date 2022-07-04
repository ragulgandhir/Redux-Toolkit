import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store'; //using RTK query store
// import store  from './reduxtoolkit/store'; //using normal redux-toolkit axios store.
// import store  from './slices'; // redux-toolkit fetch method using Asynchronous thunk action

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
