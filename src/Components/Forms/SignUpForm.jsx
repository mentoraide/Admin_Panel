import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import English from '../Texts/English.json'
const { Text, Title } = Typography;


const SignupForm = (props) => {


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const switchToLogin = () =>{
        props.setFormState('login')
    }

    return (
        <>

            <Title level={3}>{English.signupSubHeading}</Title>
            <Text>{English.signupInfo}</Text>

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
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="Enter your name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter you complete name!',
                                },
                            ]}
                        >
                            <Input placeholder='Name' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                    message: 'Please enter a valid email!',
                                },
                            ]}
                        >
                            <Input placeholder='email' />
                        </Form.Item>
                    </Col>

                    <Col span={11}>
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
                    </Col>
                    <Col span={2}></Col>

                    <Col span={11}>
                    <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Passwords do not match!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='Confirm Password' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify='center'>
                    <Col span={22}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" block>
                                <Text>{English.createAccount}</Text>
                            </Button>
                        </Form.Item>
                    </Col>
                    <Row>
                    <Col span={24}>
                            <Text>{English.backToLogin}</Text>
                            <Button size='small' type='link' onClick={switchToLogin}>{English.login}</Button>
                    </Col>
                    </Row>
                </Row>
            </Form>
        </>)
};
export default SignupForm;