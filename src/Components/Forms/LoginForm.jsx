import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import English from '../Texts/English.json'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/authentication';
const { Text, Title } = Typography;


const LoginForm = (props) => {

    const dispatch = useDispatch();
    const authenticationStatus = useSelector((state)=>{
        return state.authenticationReducer.isAuthenticated
    })

    const onFinish = (values) => {
        // console.log('Success:', values);
        dispatch(login(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const switchToSignup = () => {
        props.setFormState('signup')
    }

    const switchToForgotPassword = () => {
        props.setFormState('resetPassword')
    }

    return (

        <>
            <Title level={3}>{English.welcome}</Title>
            <Text>{English.loginSubHeading}</Text>
            <Form
                name="basic"
                layout='vertical'
                requiredMark={false}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="User ID"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder='Username' />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>

                <Row style={{ marginBottom: '20px' }}>
                    <Col span={15}></Col>
                    <Col span={8} ><Button type='link' onClick={switchToForgotPassword}>{English.forgotPassword}</Button></Col>
                </Row>

                <Row justify='center'>
                    <Col span={22}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                <Text>{English.login}</Text>
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={22}>
                        <Button type="primary" onClick={switchToSignup} block>
                            <Text>{English.createAccount}</Text>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>)
};
export default LoginForm;