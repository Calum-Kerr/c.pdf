export const detect = (item) => 
  item.fontVariant === 'small-caps' || (item.str === item.str.toUpperCase());
export const process = (text, item) =>
  `<span style="font-variant: ${item.fontVariant || 'all-small-caps'}">${text}</span>`; 