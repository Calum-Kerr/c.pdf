export const detect = (item) => {
  return item.background && item.background.length === 3;
};

export const process = (text, item) => {
  const [r, g, b] = item.background.map(c => Math.round(c * 255));
  return `<span style="background-color: rgb(${r},${g},${b})">${text}</span>`;
}; 