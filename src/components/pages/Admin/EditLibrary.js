import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import axios from 'axios';

function EditLibrary() {
  let { id } = useParams();
  const [form] = Form.useForm();
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState({});
  const { description, library_usage, name, notes } = formData;

  const handleChange = changedValues => {
    setFormData({
      ...formData,
      ...changedValues,
    });
  };

  const onFinish = values => {
    console.log(values);
  };

  const onFinishFailed = errorInfo => {
    console.log(errorInfo);
    setError(errorInfo);
  };

  useEffect(() => {
    axios
      .get(`http://54.158.134.245/api/library/${id}`)
      .then(res => {
        form.setFieldsValue({
          name: res.data.name,
          description: res.data.description,
          library_usage: res.data.library_usage,
          notes: res.data.notes,
        });
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>Edit Library Info</h1>

        <Form
          form={form}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={handleChange}
        >
          <Form.Item label="Library Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Library Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item label="Library Usage" name="library_usage">
            <Input />
          </Form.Item>

          <Form.Item
            label="Library Notes"
            name="notes"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default EditLibrary;
