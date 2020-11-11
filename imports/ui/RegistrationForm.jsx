import React from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Select,
    Button,
    // AutoComplete,
} from 'antd';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import {Link} from 'react-router-dom';


const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};



const RegistrationForm = () => {
    const [form] = Form.useForm();

    const clearForm = () =>{
        form.resetFields();
    }

    const register = (values) => {
        console.log('hihihi', values)
        Meteor.call('user.register', values, function (err) {
            if (!err) {
                console.log('register success!')
                alert('register success!')
                clearForm();
                return;
            }else{
                alert('Account was existed. Please try again!')
                return console.log(err);
            }
        });
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        register(values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
                <Option value="86">+86</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                prefix: '84',
            }}
            scrollToFirstError
        >
            <h1>Registration</h1>
            <Form.Item
                name="username"
                label={
                    <span>
                        Username
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        whitespace: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="fullname"
                label={
                    <span>
                        Fullname
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your fullname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="userRole"
                label="Kind of User"
                rules={[
                    {
                        required: true,
                        message: 'Please choose this field!',
                    },
                ]}
            >
                <Select>
                    <Option value="player">Player/Leader</Option>
                    <Option value="owner">Owner</Option>
                </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
                <div>Or <Link to='/login'>login now!</Link></div>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;