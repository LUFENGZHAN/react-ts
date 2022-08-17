import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Bg from 'particles-bg'
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <App />
    <Bg  type="cobweb" bg={true}/>
  </div>
);


