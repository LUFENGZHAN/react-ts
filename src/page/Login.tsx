import { Button, Form,message, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import style from './scss/login.module.scss'
import Bg from 'particles-bg'
import 'antd/dist/antd.css';
import  api  from '../service/request'
export default function Login () {
    const to = useNavigate()
    const onFinish = (values: any) => {
        api.post('/login',{...values}).then((res) => {
            if (res.data.code===0) {
                message.success(res.data.desc);       
                window.localStorage.setItem('token',res.data.data.token)
                to('/visualization')
                if (window.localStorage.getItem('token')) {
                    window.location.reload()
                }
            } else {
                message.error(res.data.data);
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
    };
        return (
            <div className={style.container}>
                <div className={style.login}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            initialValue="admin"
                            rules={[{ required: true, message: '请输入账号!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            initialValue="123456"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <Bg type="cobweb" bg={true} />
            </div>
        );
    }