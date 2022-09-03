import Home from '../page/Home';
import Login from '../page/Login';
import NoPage from '../components/NoPage/NoPage';
import Visualization from '../page/Visualization';
import GameCenter from '../page/GameCenter';
const otherRouter = [
  {
    path: '/404',
    title: '未找到页面',
    element: <NoPage />
  },
  {
    from: '*',
    to: '/404'
  }
];

const pageRouter = [
  {
    path: '/',
    title: '大屏',
    element: <Visualization />
  },
    {
    path: '/home/*',
    title: '首页',
    element: <Home />,
  },
  {
    path: '/visualization',
    title: '大屏',
    element: <Visualization />
  },
  {
    path: '/login',
    title: '用户登陆',
    element: <Login />
  },
  {
    path: '/game-center/*',
    title: '游戏中心',
    element: <GameCenter />
  }
];
export { otherRouter, pageRouter }