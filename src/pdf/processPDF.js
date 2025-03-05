import * as pdfjs from 'pdfjs-dist/build/pdf';
import * as formatting from '../formatting';
import worker from 'pdfjs-dist/build/pdf.worker?url';
import formattingModules from '../formatting/order';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.js',
  import.meta.url
);

export const processPDF = async (arrayBuffer) => {
  const pdf = await pdfjs.getDocument(arrayBuffer).promise;
  let content = [];
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    
    // Add text direction detection
    const textDir = page.getTextContent({
      normalizeWhitespace: true,
      disableCombineTextItems: false
    });
    
    const pageContent = textContent.items.map(item => {
      // Add font fallback system
      const fontFallback = {
        'F1': 'Helvetica', // Replace F1 with actual font names from your PDF
        'F2': 'Times-Roman'
      };
      
      const family = fontFallback[item.fontName] || item.fontName;
      const fontSize = item.height * 1.333;
      
      return `<span style="
        font-family: ${family}, sans-serif;
        font-size: ${fontSize}px;
        left: ${item.transform[4] * 1.333}px;
        top: ${(page.view[3] - item.transform[5]) * 1.333}px;
      ">${item.str}</span>`;
    });
    
    const viewport = page.getViewport({ scale: 1.5 });
    content.push(`
      <div class="page-container" style="
        width: ${viewport.width}px;
        height: ${viewport.height}px;
        position: relative;
        margin: 20px auto;
      ">
        ${pageContent.join('')}
      </div>
    `);
  }
  
  return content.join('<div class="page-break"></div>');
}; 