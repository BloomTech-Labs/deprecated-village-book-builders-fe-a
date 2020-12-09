import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { Form, Steps, Space } from 'antd';
import StudenGeneralInfo from './StudenGeneralInfo';
import StudentEducationInfo from './StudentEducationInfo';
import StudentParentInfo from './StudentParentInfo';
const { Step } = Steps;

const StyledDiv = styled.div`
  text-align: center;
  margin-top: 25px;
`;

function AddStudent() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({});

  const onFinish = values => {
    const {
      firstName,
      lastName,
      studentEmail,
      primaryLanguage,
      dob,
      englishProficiency,
      schoolLevel,
      readingLevel,
      mathLevel,
      parentName,
      parentEmail,
    } = formData;

    if (step < 2) {
      setStep(step + 1);
    } else {
      axios.post('http://54.158.134.245/api/students', {
        firstName,
        lastName,
        studentEmail,
        primaryLanguage,
        dob,
        englishProficiency,
        schoolLevel,
        readingLevel,
        mathLevel,
        parentName,
        parentEmail,
      });
    }
  };

  const handleChange = changedValues => {
    setFormData({
      ...formData,
      ...changedValues,
    });

    console.log(formData);
  };

  const onFinishFailed = errorInfo => {
    return errorInfo;
  };

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
            onValuesChange={handleChange}
          >
            {step === 0 && (
              <StudenGeneralInfo
                handleChange={handleChange}
                formData={formData}
              />
            )}
            {step === 1 && (
              <StudentEducationInfo
                handleChange={handleChange}
                formData={formData}
              />
            )}
            {step === 2 && (
              <StudentParentInfo
                handleChange={handleChange}
                formData={formData}
              />
            )}
          </Form>
        </StyledDiv>
      </Col>
    </Row>
  );
}

export default AddStudent;
