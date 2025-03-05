export const detect = (item) => item.fontWeight;
export const process = (text, item) => {
  const weight = item.fontWeight || 400;
  return `<span style="font-weight: ${weight}">${text}</span>`;
}; 