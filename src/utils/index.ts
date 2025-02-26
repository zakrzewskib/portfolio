export const dateToYYYYMMDD = (date: Date) => {
  return date.toISOString().split('T')[0];
};
