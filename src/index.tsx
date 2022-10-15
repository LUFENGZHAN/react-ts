import ReactDOM from 'react-dom/client';
import App from './App'
import './service/request'
import './api/index'
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
      <App />
  </div>
);


