import { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import { Canvas, Text } from 'fabric';
import { loadPDFFont, loadEmbeddedFont } from '../pdf/fontLoader';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFRenderer({ arrayBuffer }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [scale, setScale] = useState(1.2);
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  // PDF navigation controls
  const goPrevious = () => setCurrentPage(p => Math.max(1, p - 1));
  const goNext = () => setCurrentPage(p => Math.min(totalPages, p + 1));
  const zoomIn = () => setScale(s => Math.min(3, s * 1.2));
  const zoomOut = () => setScale(s => Math.max(0.5, s / 1.2));

  useEffect(() => {
    const renderPDF = async () => {
      const bufferCopy = new Uint8Array(arrayBuffer).buffer;
      const pdf = await pdfjs.getDocument(bufferCopy).promise;
      setTotalPages(pdf.numPages);
      
      const page = await pdf.getPage(currentPage);
      const viewport = page.getViewport({ scale: 1.5 });
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: ctx,
        viewport: viewport
      }).promise;
    };

    arrayBuffer && renderPDF();
  }, [arrayBuffer, currentPage]);

  return (
    <div className="pdf-viewer">
      <div className="controls">
        <button onClick={zoomOut}>-</button>
        <span>Zoom: {(scale * 100).toFixed(0)}%</span>
        <button onClick={zoomIn}>+</button>
        <button onClick={goPrevious} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goNext} disabled={currentPage === totalPages}>Next</button>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
} 