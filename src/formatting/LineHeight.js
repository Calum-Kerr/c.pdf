export const detect = (item) => item.lineHeight;
export const process = (text, item) =>
  `<span style="line-height: ${item.lineHeight}">${text}</span>`; 