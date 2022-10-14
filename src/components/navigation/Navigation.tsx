import { NavLink } from 'react-router-dom'
import style from './nav.module.scss'
const route = [{ to: '/home', name: '首页', },
{ to: '/game-center', name: '游戏中心', },
{ to: '/visualization', name: '大屏', }]
function active({ isActive }: any) {
  return isActive ? style.aa : style.bb
}
const Router: any =()=>{
  return route.map((route, index) => {
    return (
      <NavLink key={index} className={active} to={route.to}>{route.name}</NavLink>
    )
  })
}
export default function Navigation() {
  return (
    <div className={style.nav}>
      <Router/>
    </div>
  )
}
