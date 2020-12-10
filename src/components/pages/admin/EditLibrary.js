import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditLibrary() {
  let { id } = useParams();
  const [library, setLibrary] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(`http://54.158.134.245/api/library/${id}`)
      .then(res => {
        setLibrary(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return <div>{console.log(library)}</div>;
}

export default EditLibrary;
