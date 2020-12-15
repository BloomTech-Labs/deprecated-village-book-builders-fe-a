import React from 'react';
import { Row, Col, Button, Space } from 'antd';

function RenderVillageDashboard() {
  return (
    // <Space
    //   direction="vertical"
    //   align="center"
    //   type="flex"
    //   justify="center"
    //   style={{ width: '100%', justifyContent: 'center' }}
    // >
    <Row>
      <Col xs={{ span: 12, offset: 6 }}>
        <h1>Headmaster Dashboard</h1>
        <Button type="primary" href="#" block>
          Update Profile
        </Button>
        <Space>{''} </Space>
        <Button type="primary" href="#" block>
          Update School
        </Button>
        <Space>{''} </Space>
        <Button type="primary" href="#" block>
          Mentees
        </Button>
        <Space>{''} </Space>
        <Button type="primary" href="" block>
          Mentors
        </Button>
        <Space>{''} </Space>
        <Button type="primary" href="/admin/library" block>
          School Library
        </Button>
      </Col>
    </Row>
  );
}
export default RenderVillageDashboard;
