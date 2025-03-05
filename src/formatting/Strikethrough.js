export const detect = (item) => 
  item.decoration?.includes('lineThrough');
export const process = (text) =>
  `<span style="text-decoration: line-through">${text}</span>`; 