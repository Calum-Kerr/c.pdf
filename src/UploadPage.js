import { useState } from 'react';

function UploadPage() {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileData(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (!fileData) return;
    
    const link = document.createElement('a');
    link.href = fileData;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>PDF Upload</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
      />
      {fileData && (
        <button onClick={handleDownload}>
          Download PDF
        </button>
      )}
    </div>
  );
}

export default UploadPage; 