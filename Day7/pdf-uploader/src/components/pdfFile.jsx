import { useState } from 'react';
import './FileUpload.css'

const PdfFileUpload = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };

    // Check if the file is a PDF
    if (file.type === 'application/pdf') {
      reader.readAsDataURL(file); // Read file as a data URL
    } else {
      reader.readAsText(file); // Read file as text
    }
  };

  return (
    <div className='maincontainer'>
        <div className='uploading'>
      <input type="file" onChange={handleFileChange} accept=".txt, .pdf" />
      </div>
      <div className='ViewContent'>
        {fileContent && (
          <div className='uploadercontainer'>
            <h2>File Content:</h2>
            {fileContent.startsWith('data:application/pdf') ? (
              <embed src={fileContent} type="application/pdf" width="100%" height="600px" />
            ) : (
              <pre>{fileContent}</pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfFileUpload;
