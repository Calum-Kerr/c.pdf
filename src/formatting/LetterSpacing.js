export const detect = (item) => item.letterSpacing;
export const process = (text, item) => {
  return `<span style="letter-spacing: ${item.letterSpacing}px">${text}</span>`;
}; 