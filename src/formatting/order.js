import {
  detectBold, processBold,
  detectItalic, processItalic,
  detectHighlight, processHighlight
  // Import all others
} from '.';

export default [
  {
    name: 'Bold',
    detect: detectBold,
    process: processBold
  },
  {
    name: 'Italic',
    detect: detectItalic,
    process: processItalic
  },
  // Add all other modules
]; 