import React from 'react';
import { Row, Col, Button } from 'antd';

function RenderVillageDashboard() {
  return (
    <Row gutter={[16, 24]}>
      <Col xs={{ span: 12, offset: 6 }}>
        <h1 style={{ textAlign: 'center' }}>Headmaster Dashboard</h1>
        <Button type="primary" shape="round" href="/admin/library" block>
          School Library
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }}>
        <Button type="primary" shape="round" href="/village" block>
          Village Info
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }}>
        <Button type="primary" shape="round" href="/edit-headmaster" block>
          Update Profile
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }}>
        <Button type="primary" shape="round" href="/headmaster/student/" block>
          Mentees / Students
        </Button>
      </Col>
      <Col xs={{ span: 12, offset: 6 }}>
        <Button type="primary" shape="round" href="/headmaster/mentor/" block>
          Mentor
        </Button>
      </Col>
    </Row>
  );
}
export default RenderVillageDashboard;
