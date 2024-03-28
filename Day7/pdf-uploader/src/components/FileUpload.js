import React, { useState } from 'react';
import './FileUpload.css'

const FileUpload = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  return (
    <div className='maincontainer'>
      <input type="file" onChange={handleFileChange} accept=".txt" />
      <div>
        {fileContent && (
          <div className='uploadercontainer'>
            <h2>File Content:</h2>
            <pre>{fileContent}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
