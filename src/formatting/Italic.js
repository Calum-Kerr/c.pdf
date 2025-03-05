export const detect = (item) => {
  return item.fontName.includes('Italic') || item.fontStyle === 'italic';
};

export const process = (text) => {
  return `<em>${text}</em>`;
}; 