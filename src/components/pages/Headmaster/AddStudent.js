import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Form, Input, Button, Checkbox, DatePicker } from 'antd';

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

function AddStudent() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <StyledDiv>
          <h1>Add Student</h1>
          <Form
            name="addStudent"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'Student First Name is required' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Student Last Name is required' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Primary Language"
              name="primaryLanguage"
              rules={[
                { required: true, message: 'Primary Language is required' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[
                {
                  required: true,
                  message: 'Student Date of Birth is required',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default AddStudent;
