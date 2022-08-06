import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './views/Table'
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
  刚开始学习reactjs
    <img src={log} className="App-logo" alt="logo" />
    <Table characters={characters} />
  </div>
);


