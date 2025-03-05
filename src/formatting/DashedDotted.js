export const detect = (item) =>
  ['dashed', 'dotted'].includes(item.decorationStyle);
export const process = (text, item) =>
  `<span style="text-decoration-style: ${item.decorationStyle}">${text}</span>`; 