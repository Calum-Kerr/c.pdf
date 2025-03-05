export const detect = (item) => item.height;
export const process = (text, item) => {
  return `<span style="font-size: ${item.height}px">${text}</span>`;
}; 