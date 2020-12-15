import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Alert } from 'antd';
import axios from 'axios';
import Password from 'antd/lib/input/Password';
import { useUser } from '../../../state/UserContext';
function Login() {
  const userInfo = useUser();
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    setLoading(true);
    axios
      .get(`http://54.158.134.245/api/auth/?username=${values.username}`, {})
      .then(res => {
        setLoading(false);
        if (res.data.length === 1) {
          userInfo.setUserInfo(res.data[0]);
          history.push('/admin/library');
        }
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  };

  const onFinishFailed = errorInfo => {
    setError(errorInfo);
  };

  return (
    <Row>
      <Col span={10} offset={8}>
        <h1>Village Book Builders Login</h1>

        {error && (
          <Alert
            message="There was an error"
            description="Your request could not be completed"
            type="error"
            closable
          />
        )}
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
