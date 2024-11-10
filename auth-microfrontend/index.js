import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Auth Microfrontend</h1>
      <Login />
      <Register />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
