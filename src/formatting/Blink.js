export const detect = (item) => item.annotationType === 'Widget'; // Rare case
export const process = (text) =>
  `<span style="animation: blink 1s step-end infinite">${text}</span>`; 