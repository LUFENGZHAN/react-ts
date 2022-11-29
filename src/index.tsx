import ReactDOM from 'react-dom/client';
import zhCN from 'antd/es/locale/zh_CN'
import {ConfigProvider} from 'antd';
import App from './App'
import './service/request'
import './api/index'
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </div>
);


