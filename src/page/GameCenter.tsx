import { useRef, useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import style from './GameCenter.module.scss'
import {useNavigate ,Link,Routes,Route} from 'react-router-dom'
import Home1 from '../components/Home/Home1';
import Home2 from '../components/Home/Home2';
const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu
const App: any = (data: any) => {
  console.log(data);
  return (
    <Layout>
              <Header className={style["site-layout-background"]} style={{ padding: 0,background:'red' }}>
          <div style={{ display:'inline-block',cursor:'pointer'}}ref={data.dva} onClick={data.the}>首页</div>
        </Header>
      
      <Layout className={style["site-layout"]}>
      <Sider trigger={null} collapsible >
        <div className={style["logo"]} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1"> <Link to="/game-center/home1">统计图</Link></Menu.Item>
          <Menu.Item key="2"> <Link to="/game-center/home2">table统计图</Link></Menu.Item>

        </Menu>
      </Sider>
        <Content
          className={style["site-layout-background"]}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 648,
          }}
        >
          <Routes>
          <Route  path="home1" element={<Home1/>} />
          <Route  path="home2" element={<Home2/>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default function GameCenter() {
  const [data,aa] = useState(0)
  const dva: any= useRef()
  useEffect(() =>{
  },)
  const to = useNavigate()
  const the:any = (e:number) =>{ 
    to('/home')
    aa(data+1)
  }
  return (
    <div className={style.container}>
      <App data={data} the={the} dva={dva}/>
      </div>
  )
}
