
export const isValidNumericId = (id?: string): boolean => {
  if (!id) return false;

  // فقط عدد مثبت (1, 2, 3, ...)
  return /^[1-9]\d*$/.test(id);
};
