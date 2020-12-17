import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FromInput, FormButton } from '../../common';
import { Form, Input, Button, Space, Alert } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import axios from 'axios';

function RenderEditProfile() {
  let { id } = useParams();
  let history = useHistory();
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  id = 0;

  useEffect(() => {
    axios.get(`https://54.158.134.245/api/headmaster/`).then(res => {
      console.log(res.data[0]);
      form.setFieldsValue({
        first_name: res.data[0].first_name,
        second_name: res.data[0].second_name,
        email: res.data[0].email,
        phone_number: res.data[0].phone_number,
        bio: res.data[0].bio,
        address: res.data[0].address,
        goals: res.data[0].goals_personal,
      });
    });
  }, [id, form]);

  const onFinish = values => {
    setLoading(true);
    axios
      .put(`https://54.158.134.245/api/headmaster/${id}`, {
        first_name: values.first_name,
        second_name: values.second_name,
        email: values.email,
        phone_number: values.phone_number,
        bio: values.bio,
        address: values.address,
        goals_personal: values.goals,
      })
      .then(() => {
        setLoading(false);
        history.push('/headmaster');
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
    <Space
      direction="vertical"
      align="center"
      type="flex"
      justify="center"
      style={{ width: '100%', justifyContent: 'center' }}
    >
      <h1>Edit Headmaster Profile</h1>

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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
          label="Personal Goals"
          name="goals"
          rules={[
            {
              required: true,
              message: 'Update goals',
            },
            {
              message: 'Please enter your personal goals',
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}
export default RenderEditProfile;
