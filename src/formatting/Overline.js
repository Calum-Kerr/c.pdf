export const detect = (item) => 
  item.decoration?.includes('overline');
export const process = (text) =>
  `<span style="text-decoration: overline">${text}</span>`; 