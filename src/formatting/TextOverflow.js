export const detect = (item) => item.width < item.str.length * item.height;
export const process = (text) =>
  `<span style="text-overflow: ellipsis; overflow: hidden">${text}</span>`; 