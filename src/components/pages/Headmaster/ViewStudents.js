import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Space, Button } from 'antd';
const { Column, ColumnGroup } = Table;
function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://54.158.134.245/api/students').then(result => {
      setStudents(result.data);
    });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <Button type="primary" htmlType="submit">
        Add Student
      </Button>
      <Table dataSource={students}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Email" dataIndex="studentEmail" key="studentEmail" />
      </Table>
      ,
    </div>
  );
}

export default ViewStudents;
