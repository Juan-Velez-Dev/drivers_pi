import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
