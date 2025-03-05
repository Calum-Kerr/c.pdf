export const detect = (item) =>
  item.decorationStyle === 'double' && item.decoration?.includes('underline');
export const process = (text) =>
  `<span style="text-decoration: underline double">${text}</span>`; 