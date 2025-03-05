export const detect = (item) => item.textAlign;
export const process = (text, item) => {
  return `<div style="text-align: ${item.textAlign}">${text}</div>`;
}; 