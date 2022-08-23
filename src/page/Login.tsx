import React, {Component, useContext } from 'react';
import { Button, Form,message, Input } from 'antd';
import { NavLink,useNavigate } from 'react-router-dom'
import { context } from '../components/AppPro';
import style from './login.module.scss'
import Bg from 'particles-bg'
import 'antd/dist/antd.css';
import  api  from '../service/request'
export default function Login () {
    const to = useNavigate()
    const {setilogin} = useContext<any>(context)

    const onFinish = (values: any) => {
        api.post('/login',{...values}).then((res) => {
            if (res.data.code===0) {
                message.success(res.data.desc);
                setilogin(true)
                to('/home')
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