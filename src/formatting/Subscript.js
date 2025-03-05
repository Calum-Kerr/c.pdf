export const detect = (item) => {
  const transform = item.transform;
  return transform[13] < 0 && item.height < 10; // y-position and small size
};
export const process = (text) => `<sub>${text}</sub>`; 