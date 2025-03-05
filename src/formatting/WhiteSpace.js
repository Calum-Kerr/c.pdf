export const detect = (item) => item.str.includes('  '); // Multiple spaces
export const process = (text) =>
  `<span style="white-space: pre-wrap">${text}</span>`; 