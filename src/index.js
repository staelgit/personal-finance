import React from 'react';
import ReactDOM from 'react-dom/client';
import {
   unstable_HistoryRouter as HistoryRouter
   // BrowserRouter
} from 'react-router-dom';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import { createStore } from './app/store/createStore';
// import reportWebVitals from './reportWebVitals';
import history from './app/utils/history';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   // <React.StrictMode>
   <Provider store={store}>
      {/* <BrowserRouter> */}
      <HistoryRouter history={history}>
         <App />
      </HistoryRouter>
      {/* </BrowserRouter> */}
   </Provider>
   // </React.StrictMode>
);

// reportWebVitals();
