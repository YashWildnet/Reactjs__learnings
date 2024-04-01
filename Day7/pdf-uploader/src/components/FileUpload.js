import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [fileContent, setFileContent] = useState(null);

  const handleupload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if ((file.type === "application/pdf")) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };
  };

  return (
    <div className="Maincontainer">
      <div className="leftcontainer">
        <input type="file" onChange={handleupload} accept=".txt, .pdf " />
      </div>

      <div className="rightcontainer">
        {fileContent && (
          <div className="uploadercontainer">
            <h2>File Document</h2>
            {fileContent.startsWith("data:application/pdf") ? (
              <embed
                src={fileContent}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            ) : (
              <pre>{fileContent}</pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
