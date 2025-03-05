export const detect = (item) => {
  return item.fontName.includes('Bold') || item.fontWeight >= 700;
};

export const process = (text) => {
  return `<strong>${text}</strong>`;
}; 