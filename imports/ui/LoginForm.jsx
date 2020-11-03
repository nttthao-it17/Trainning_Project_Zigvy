import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // React.useEffect(() =>{
    //     if(Meteor.userId()){
    //         history.push("/app")
    //     }
    // },[])
    const history = useHistory();

    const submit = () => {
        Meteor.loginWithPassword(username, password)
    };
      
    const currentUserId = useTracker(() =>{
        const currentUserId = Meteor.userId();
        return currentUserId;
    })

    if (currentUserId) {
        return <Redirect to="/app" />
    }

    return(
        <Form 
            name="normal_login"
            className="login-form" 
            onFinish={submit} 
        >
            <Form.Item
                name="username"
                className="username-form"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Username" 
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                name="password"
                className="password-form"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="button" htmlType="submit" className="login-form-button">
                Log in
                </Button>
            </Form.Item>
        </Form>
    );
}

export default withRouter(LoginForm)