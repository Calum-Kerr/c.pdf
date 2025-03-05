import { StandardFonts } from '@pdf-lib/standard-fonts';
import * as pdfjs from 'pdfjs-dist';

// Create a font mapping using the actual standard fonts
const PDFFonts = {
  Helvetica: 'Helvetica',
  'Helvetica-Bold': 'Helvetica',
  'Times-Roman': 'Times New Roman',
  Courier: 'Courier New'
};

export const loadPDFFont = (fontName) => {
  return PDFFonts[fontName] || 'Arial';
};

export const loadEmbeddedFont = async (pdf) => {
  const fonts = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const ops = await page.getOperatorList();
    ops.fnArray.forEach(async (fn, index) => {
      if (fn === pdfjs.OPS.setFont) {
        const fontName = ops.argsArray[index][0];
        const font = await page.commonObjs.get(fontName);
        if (font.data) {
          const fontFace = new FontFace(fontName, font.data);
          document.fonts.add(fontFace);
          fonts.push(fontFace);
        }
      }
    });
  }
  return fonts;
}; 