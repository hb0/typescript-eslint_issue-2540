import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router } from 'react-router-dom';


ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);
