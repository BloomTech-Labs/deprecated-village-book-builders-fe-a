import React, { useState } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Form, Steps, Space } from 'antd';
import StudenGeneralInfo from './StudenGeneralInfo';
import StudentEducationInfo from './StudentEducationInfo';
const { Step } = Steps;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

function AddStudent() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const [step, setStep] = useState(0);
  return (
    <Row>
      <Col span={12} offset={6}>
        <StyledDiv>
          <h1>Add Student</h1>
          <Steps current={step} onChange={step => setStep(step)}>
            <Step title="General Info" />
            <Step title="Education" />
            <Step title="Parent/Guardian" />
          </Steps>
          <Space> </Space>
          <Form
            name="addStudent"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {step === 0 && <StudenGeneralInfo />}
            {step === 1 && <StudentEducationInfo />}
          </Form>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default AddStudent;
