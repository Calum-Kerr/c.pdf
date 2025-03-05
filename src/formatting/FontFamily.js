export const detect = (item) => item.fontName;
export const process = (text, item) => {
  const fontMap = {
    'Times-Roman': 'Times New Roman',
    'Helvetica': 'Arial',
    'Courier': 'Courier New'
  };
  const family = fontMap[item.fontName] || item.fontName;
  return `<span style="font-family: ${family}, sans-serif">${text}</span>`;
}; 