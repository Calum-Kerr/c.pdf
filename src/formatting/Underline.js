export const detect = (item) => 
  item.decoration?.includes('underline') || item.fontName.includes('Underline');
export const process = (text) =>
  `<span style="text-decoration: underline">${text}</span>`; 