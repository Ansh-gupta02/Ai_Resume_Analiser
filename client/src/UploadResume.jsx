import React, { useState } from 'react';
import axios from 'axios';

function UploadResume() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setMessage('');
    } else {
      setMessage('Please select a PDF file only');
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:4000/api/upload/resume', formData);
      setMessage('Upload successful!');
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Upload Resume (PDF only)</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadResume;

