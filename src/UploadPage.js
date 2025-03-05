import { useState } from 'react';
import PDFRenderer from './components/PDFRenderer';
import './styles/pdfViewer.css';

export default function UploadPage() {
  const [pdfData, setPdfData] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file?.type === 'application/pdf') {
      const arrayBuffer = await file.arrayBuffer();
      setPdfData(arrayBuffer.slice());
    }
  };

  return (
    <div>
      <h2>PDF Viewer</h2>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      {pdfData && <PDFRenderer arrayBuffer={pdfData} />}
    </div>
  );
} 