import React, { Component } from 'react';
import { Button, Form,message, Input } from 'antd';
import style from './login.module.scss'
import Bg from 'particles-bg'
import 'antd/dist/antd.css';
import  api  from '../service/request'
class Login extends Component {
    onFinish = (values: any) => {
        api.post('/login',{...values}).then((res) => {
            if (res.data.code===0) {
                console.log(res.data);
                message.success(res.data.desc);
            } else {
                message.error(res.data.data);
            }
        })
    };

    onFinishFailed = (errorInfo: any) => {
    };
    render() {
        return (
            <div className={style.container}>
                <div className={style.login}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[{ required: true, message: '请输入账号!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
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
}

export default Login;