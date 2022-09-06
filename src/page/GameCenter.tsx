import { useRef, useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import style from './scss/GameCenter.module.scss'
import { useNavigate, NavLink,Outlet } from 'react-router-dom'
import log from '../images/1.jpg'
const { Header, Content, Sider } = Layout;
const App: any = (data: any) => {
  return (
    <Layout>
      <Header className={[style["site-layout-background"], style.text].join(' ')}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={style.imge} >
            <div style={{ display: 'inline-block', cursor: 'pointer' }} ref={data.dva} onClick={() => data.the(1)}>返回首页</div>
          </div>
        </div>
        <div className={style.rigth}>
          <img className={style.userlog} src={log} alt='log' />
          <div className={style.hide} style={{ display: 'inline-block', cursor: 'pointer' }} >你好小站</div>
          <div className={style.abe}>
            <span ref={data.dva} onClick={() => data.the(2)}>退出登录</span>
          </div>
        </div>
      </Header>
      <Layout className={style["site-layout"]}>
        <Sider trigger={null} collapsible >
          <div className={style["logo"]} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1"> <NavLink to="ListOne">列表一</NavLink></Menu.Item>
            <Menu.Item key="2"> <NavLink to="ListTwe">列表二</NavLink></Menu.Item>
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
  const [data, aa] = useState(0)
  const dva: any = useRef()
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
      <App data={data} the={the} dva={dva} />
    </div>
  )
}
