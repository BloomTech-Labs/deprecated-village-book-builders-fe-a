import React from 'react';

import { FromInput, FormButton } from '../../common';
import { Form, Input, Button, Space } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';

function RenderEditProfile() {
  const layout = {
    wrapperCol: {
      span: 8,
    },
  };

  return (
    <Space
      direction="vertical"
      align="center"
      type="flex"
      justify="center"
      style={{ width: '100%', justifyContent: 'center' }}
    >
      <h1>Edit Headmaster Profile</h1>
      <Form onFinish={values => console.log(values)} {...layout}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Update email address',
            },
            {
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Update first name',
            },
            {
              message: 'Please enter a first name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Second Name"
          name="second_name"
          rules={[
            {
              required: true,
              message: 'Update second name',
            },
            {
              message: 'Please enter a second name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Update address',
            },
            {
              message: 'Please enter an address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          rules={[
            {
              required: true,
              message: 'Update bio',
            },
            {
              message: 'Please enter information in your bio',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              required: true,
              message: 'Update phone number',
            },
            {
              message: 'Please enter a valid phone number',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}
export default RenderEditProfile;
