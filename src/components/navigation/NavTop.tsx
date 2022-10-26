
import  style  from './nav.module.scss'
import { useNavigate } from 'react-router-dom'
export default function NavTop() {
  const to:any = useNavigate()
  return (
    <div className={style.navTop}>
      <div className={style.natitle}>
        <p onClick={() =>to('/home')}>首页</p>
        <p onClick={() =>window.location.reload()}>专属大屏</p>
        <p onClick={() =>to('/game-center')}>后台</p>
      </div>
    </div>
  )
}
