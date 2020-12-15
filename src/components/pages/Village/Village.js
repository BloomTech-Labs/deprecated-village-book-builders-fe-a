import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Space } from 'antd';
import axios from 'axios';
function Village() {
  const [village, setVillage] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('http://54.158.134.245/api/village')
      .then(res => setVillage(res.data))
      .catch(err => setError(err));
  }, []);

  return (
    <div>
      {console.log(village)}
      <Row>
        <Col span={12} offset={6}>
          <h1>Village Info</h1>
        </Col>
      </Row>

      {village.map(v => {
        return (
          <Row>
            <Col span={12} offset={6} id={v.id}>
              <h2>Village: {v.id}</h2>
              <p>
                <b>Location:</b> {v.GPS_coordinates[0]}, {v.GPS_coordinates[1]}
              </p>
              <p>
                <b>Education Contact Name:</b> {v.education_contact.name}
              </p>
              <p>
                <b>Education Contact Email:</b> {v.education_contact.email}
              </p>
              <p>
                <b>Education Contact Phone:</b> {v.education_contact.phone}
              </p>
              <p>
                <b>Drive Folder:</b>{' '}
                <a href={v.images_drive_folder_link}>Google Drive</a>
              </p>
              <p>
                <b>Notes:</b> {v.notes}
              </p>
              <p>
                <b>Village Contact:</b> {v.village_contact_name}
              </p>
              <p>
                <b>Village Contact Phone:</b> {v.village_contact_phone}
              </p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Village;
