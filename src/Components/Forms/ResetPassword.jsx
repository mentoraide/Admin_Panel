import React from 'react';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import English from '../Texts/English.json'
const { Text, Title } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const ResetPassword = (props) => {

    
    const switchToLogin = () =>{
        props.setFormState('login')
    }

    return (
        <>
            <Text>{English.passwordReset}</Text>
            <Form
                layout='vertical'
                name="basic"
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Enter a valid email!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your email' />
                </Form.Item>

                <Row justify='center'>
                    <Col span={24}>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                {English.resetLink}
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={7}>

                        <Text>Back to</Text>
                        <Button size='small' type='link' onClick={switchToLogin}>
                            {English.login}
                        </Button>
                    </Col>
                </Row>

            </Form>
        </>
    )
};
export default ResetPassword;