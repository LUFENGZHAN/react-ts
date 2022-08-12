import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './page/Table'
import App from './App'
import log from './assets/images/logo.svg'
import './assets/css/index.css';
const characters = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
]
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<div className="App-header">
  <App/>
  学习react
    <img src={log} className="App-logo" alt="logo" />
    <Table characters={characters} />
  </div>
);


