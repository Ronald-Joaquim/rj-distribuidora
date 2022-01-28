import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Form from 'pages/Form';
import Listing from 'pages/Listing';


ReactDOM.render(
  <React.StrictMode>
    <App />

    <Listing />
  </React.StrictMode>,
  document.getElementById('root')
);