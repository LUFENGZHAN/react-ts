import React from 'react';
import AppPro from './components/AppPro'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <AppPro>
      <App />
    </AppPro>
  </div>
);


