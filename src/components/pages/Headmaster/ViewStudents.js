import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, Row, Col, Button } from 'antd';
const { Column } = Table;
function ViewStudents() {
  const [students, setStudents] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get('http://54.158.134.245/api/students').then(result => {
      setStudents(result.data);
    });
  }, []);
  const addStudentClick = () => history.push('/headmaster/student/add');
  return (
    <div>
      <h1>Student List</h1>
      <Button type="primary" htmlType="submit" onClick={addStudentClick}>
        Add Student
      </Button>
      <Row>
        <Col span={20} offset={2}>
          <Table dataSource={students}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Email" dataIndex="studentEmail" key="studentEmail" />
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default ViewStudents;
