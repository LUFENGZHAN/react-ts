import Home from '../pages/Home';
import Login from '../pages/Login';
import NoPage from '../components/NoPage/NoPage';
import Visualization from '../pages/Visualization';
import HomePage from '../pages/GameCenter/HomePage';
import GameCenter from '../pages/GameCenter';
import ListOne from '../pages/GameCenter/ListOne';
import ListTwe from '../pages/GameCenter/ListTwe';
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
    path: '/home',
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
    path: '/game-center',
    title: '游戏中心',
    element: <GameCenter />,
    children: [
      {
        path: "",
        title:'首页',
        element: <HomePage/>
      },
      {
        path:'ListOne',
        title:'列表一',
        element: <ListOne />,
      },
      {
        path:'ListTwe',
        title:'列表二',
        element: <ListTwe />,
      }
    ]
  }
];

export { otherRouter, pageRouter }