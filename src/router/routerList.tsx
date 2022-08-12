import Home from '../page/Home';
import Login from '../page/Login';
import List from '../page/List';

const otherRouter = [
  {
    path: '/404',
    title: '未找到页面',
    // element: <NotFound />
  },
  {
    from: '*',
    to: '/404'
  }
];

const pageRouter = [
  {
    path: '/',
    title: '仪表盘',
    element: <Home />
  },
  {
    path: '/dashboard',
    title: '仪表盘',
    element: <Home />
  },
  {
    path: '/login',
    title: '用户登陆',
    element: <Login />
  },
  {
    path: '/list',
    title: '列表',
    element: <List />
  }
];
export { otherRouter, pageRouter };
