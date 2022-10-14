import { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import style from './scss/GameCenter.module.scss'
import { useNavigate, NavLink,Outlet,useLocation } from 'react-router-dom'
import {pageRouter} from '../router/routerList'
import log from '../images/1.jpg'
const menuList = pageRouter.filter((res:any) =>{
  return res.title === '游戏中心'
})
const {children}:any = menuList[0]
const { Header, Content, Sider } = Layout;
const App: any = (data: any) => {
const location =useLocation()
const {pathname} =location
const name =window.localStorage.getItem('name')
  return (
    <Layout>
      <Header className={[style["site-layout-background"], style.text].join(' ')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={style.imge} >
            <div style={{ display: 'inline-block', cursor: 'pointer' }}  onClick={() => data.the(1)}>后台管理</div>
          </div>
        </div>
        <div className={style.rigth}>
          <img className={style.userlog} src={log} alt='log' />
          <div className={style.hide} style={{ display: 'inline-block', cursor: 'pointer' }} >你好 {name}</div>
          <div className={style.abe}>
            <span  onClick={() => data.the(2)}>退出登录</span>
          </div>
        </div>
      </Header>
      <Layout className={style["site-layout"]}>
        <Sider trigger={null} collapsible >
          <div className={style["logo"]} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[pathname]}
          >
            {
            children.map((v:any) => { 
              return (
                <Menu.Item key={v.key}><NavLink to={v.path}>{v.title}</NavLink></Menu.Item>
             )
            })
          }
          </Menu>
        </Sider>
        <Content
          className={style["site-layout-background"]}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 648,
            minWidth: 1024,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default function GameCenter() {
  useEffect(() => {
    
  },)
  const to = useNavigate()
  const the: any = (e: number) => {
    switch (e) {
      case 1:
        to('/home')
        return
      case 2:
        window.localStorage.removeItem('token')
        to('/login')
        return
    }
  }
  return (
    <div className={style.container}>
      <App the={the} />
    </div>
  )
}
