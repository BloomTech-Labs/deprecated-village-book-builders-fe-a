import React from 'react';
import { Button, Space } from 'antd';

function RenderVillageDashboard() {
  return (
    <Space
      direction="vertical"
      align="center"
      type="flex"
      justify="center"
      style={{ width: '100%', justifyContent: 'center' }}
    >
      <h1>Headmaster Dashboard</h1>

      <Space size="small" align="center" direction="horizontal">
        <Button type="primary" href="#">
          Update Profile
        </Button>
        <Button type="primary" href="#">
          Update School
        </Button>
      </Space>
      <Space size="small" align="center" direction="horizontal">
        <Button type="primary" href="#">
          Mentees
        </Button>
        <Button type="primary" href="#">
          Mentors
        </Button>
      </Space>
      <Button type="primary" href="#">
        School Library
      </Button>
    </Space>
  );
}
export default RenderVillageDashboard;
