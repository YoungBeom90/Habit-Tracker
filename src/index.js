import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Simplehabit from './components/simpleHabit'
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Simplehabit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
