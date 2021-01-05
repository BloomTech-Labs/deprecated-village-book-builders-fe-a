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
        <br></br>
        <h1 style={{ textAlign: 'center' }}>Headmaster Dashboard</h1>
        {/* 
        <Space>{''} </Space>
        <Button type="primary" href="#" block>
          Update School
        </Button>
        <Space>{''} </Space>

        <Space>{''} </Space>
        <Button type="primary" href="" block>
          Mentors
        </Button> */}
        <br></br>
        <Button type="primary" shape="round" href="/admin/library" block>
          School Library
        </Button>
        <br></br>
        <br></br>
        <Button type="primary" shape="round" href="/village" block>
          Village Info
        </Button>
        <br></br>
        <br></br>
        <Button type="primary" shape="round" href="/edit-headmaster" block>
          Update Profile
        </Button>
        <br></br>
        <br></br>
        <Button type="primary" shape="round" href="/headmaster/student/" block>
          Mentees / Students
        </Button>
      </Col>
    </Row>
  );
}
export default RenderVillageDashboard;
