import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Space } from 'antd';
import axios from 'axios';
function Village() {
  const [village, setVillage] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('https://54.158.134.245/api/village')
      .then(res => setVillage(res.data))
      .catch(err => setError(err));
  }, []);

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <h1>Village Info</h1>
        </Col>
      </Row>

      {village.map(v => {
        return (
          <Row>
            <Col span={12} offset={6} id={v.id}>
              <h2>
                <a href={`/village/${v.id}`}>Village: {v.id}</a>
              </h2>

              <p>
                <b>Longitude:</b> {v.longitude}
              </p>
              <p>
                <b>Longitude:</b> {v.latitude}
              </p>
              <p>
                <b>Education Contact Name:</b> {v.educationContactName}
              </p>
              <p>
                <b>Education Contact Email:</b> {v.educationContactEmail}
              </p>
              <p>
                <b>Education Contact Phone:</b> {v.educationContactPhone}
              </p>
              <p>
                <b>Drive Folder:</b> <a href={v.driveLink}>Google Drive</a>
              </p>
              <p>
                <b>Notes:</b> {v.notes}
              </p>
              <p>
                <b>Village Contact:</b> {v.villageContactName}
              </p>
              <p>
                <b>Village Contact Phone:</b> {v.villageContactPhone}
              </p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Village;
