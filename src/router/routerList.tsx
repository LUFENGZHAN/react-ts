import Home from '../page/Home';
import Login from '../page/Login';
import NoPage from '../components/NoPage/NoPage';
import { useRoutes } from 'react-router-dom';
import Visualization from '../page/Visualization';
import GameCenter from '../page/GameCenter';
const Routers = ()=>{
	const router = useRoutes([
		{
			path: '/',
			element:<Visualization/>
		},
		{
			path: '/login',
			element:<Login/>
		},
		{
			path: '/home',
			element:<Home/>,
			// children:[
			// 	{
			// 		path: '/login',
			// 		element:<Login/>
			// 	}
			// ]
		},
		{
			path: '/game-center',
			element:<GameCenter/>
		},
		{
			path: '*',
			element:<NoPage/>
		}
	])
	return router
}
export default Routers