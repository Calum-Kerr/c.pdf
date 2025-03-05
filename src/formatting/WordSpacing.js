export const detect = (item) => item.wordSpacing;
export const process = (text, item) =>
  `<span style="word-spacing: ${item.wordSpacing}px">${text}</span>`; 