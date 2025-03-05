import { Bold } from './formatting/Bold';
import { Italic } from './formatting/Italic';
import { Highlight } from './formatting/RecogniseHighlightedText';
// Import all other formatting modules...

export const processPdfContent = (pdfData) => {
  return pdfData.text.split('\n').map((line, lineIndex) => {
    let processedLine = line;
    processedLine = Bold.process(processedLine);
    processedLine = Italic.process(processedLine);
    processedLine = Highlight.process(processedLine);
    // Process with all other formatting modules
    return <div key={lineIndex} dangerouslySetInnerHTML={{ __html: processedLine }} />;
  });
}; 