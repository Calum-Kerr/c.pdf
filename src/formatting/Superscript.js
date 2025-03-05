export const detect = (item) => {
  const transform = item.transform;
  return transform[13] > item.height * 1.2; // Elevated position
};
export const process = (text) => `<sup>${text}</sup>`; 