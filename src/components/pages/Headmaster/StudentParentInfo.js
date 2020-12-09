import React from 'react';
import { Form, Input, Button } from 'antd';
function StudentParentInfo() {
  return (
    <div>
      <Form.Item
        label="English Proficiency"
        name="englishProficiency "
        rules={[{ required: true, message: 'English Proficiency is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parents/Guardian Names"
        name="parentName"
        rules={[{ required: true, message: 'Parents/Guardian Names' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Parent Phone #"
        name="parentPhoneNumber"
        rules={[{ required: true, message: 'Parent Phone # is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parent Email"
        name="parentEmail"
        rules={[{ required: true, message: 'Parent Email is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </div>
  );
}

export default StudentParentInfo;
